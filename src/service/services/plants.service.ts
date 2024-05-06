import { sql, eq } from "drizzle-orm";
import { db } from "../../database/db";
import { plants } from '../../database/schema';
import { SomeApiResponse, int } from "../../types";
import { Result } from "../types";

export class PlantsAPI {
    static loadPlant = async (plant_id: int): Promise<Result<SomeApiResponse>> => {
        const [_plant] = await db.select().from(plants).where(eq(plants.id, plant_id));
        const waterHistory: { amount: number, rate: number, period: number }[] = await db.execute(sql`
            WITH 
            rate AS (
                SELECT AVG(DailyWaterRates) as DailyRate
                FROM (
                    SELECT waterings.amount / EXTRACT(day FROM LEAD(waterings.watered_at) OVER (ORDER BY waterings.watered_at) - waterings.watered_at) as DailyWaterRates
                    FROM 
                        waterings
                    WHERE
                        waterings.plant_id = ${plant_id}
                )
            ),
            calc AS (
                SELECT
                MAX(waterings.watered_at) as LastWatered,
                SUM(waterings.amount) AS TotalWaterAmount,
                extract(day from CURRENT_DATE - MIN(waterings.watered_at)) as TotalDays,
                ROUND(AVG(waterings.amount) / 0.05, 0) * 0.05 AS AverageWaterAmount
                FROM waterings
                WHERE waterings.plant_id = ${plant_id}
            )
            SELECT
                rate.DailyRate,
                calc.LastWatered,
                extract(day from CURRENT_DATE - calc.LastWatered) as DaysSinceWatered,
                calc.TotalWaterAmount,
                calc.TotalDays,
                calc.AverageWaterAmount,
                calc.TotalWaterAmount - (calc.TotalDays * rate.DailyRate) as EstimatedWaterLevel,
                ROUND(calc.AverageWaterAmount / rate.DailyRate, 0) as AverageWateringPeriod
            FROM 
                calc, rate;
        `);

        return {
            error: null,
            result: {
                plant: _plant,
                waterHistory: waterHistory[0]
            }
        };
    };
}
