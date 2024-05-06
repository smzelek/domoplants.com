import { accounts, plants, users, waterings } from "./schema";
import { eq } from 'drizzle-orm';
import { logFunction, dbNow } from '../service/utils';
import { client, db } from './db';

const seedDb = async () => {
    const _accounts: (typeof accounts.$inferInsert)[] = [
        {
            id: 1,
            owner_user_id: null,
            name: "KZ House",
            updated_at: dbNow(),
            created_at: dbNow(),
        },
    ];

    const _users: (typeof users.$inferInsert)[] = [
        {
            id: 1,
            name: "Steve Zelek",
            account_id: 1,
            username: "smzelek@gmail.com",
            role: "write",
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 2,
            name: "Marina Kapes",
            account_id: 1,
            username: "marinajkapes@gmail.com",
            role: "read",
            updated_at: dbNow(),
            created_at: dbNow(),
        },
    ];

    const _plants: (typeof plants.$inferInsert)[] = [
        {
            id: 1,
            account_id: 1,
            scientific_name: 'Epipremnum aureum',
            common_name: 'Pothos',
            acquired_at: new Date('11/11/23'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 2,
            account_id: 1,
            scientific_name: 'Dracaena deremensis',
            common_name: 'Janet Craig Compacta',
            acquired_at: new Date('12/19/23'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 3,
            account_id: 1,
            scientific_name: 'Calathea makoyana',
            common_name: 'Peacock plant',
            acquired_at: new Date('12/25/23'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 4,
            account_id: 1,
            scientific_name: 'Zamioculcas zamiifolia',
            common_name: 'Zanzibar Gem',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 5,
            account_id: 1,
            scientific_name: 'Tradescantia',
            common_name: 'Spiderwort',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 6,
            account_id: 1,
            scientific_name: 'Chamaedorea elegans',
            common_name: 'Parlor Palm',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 7,
            account_id: 1,
            scientific_name: 'Plerandra elegantissima',
            common_name: 'Gold Crest False Aralia',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 8,
            account_id: 1,
            scientific_name: 'Portulacaria afra',
            common_name: 'Dwarf Jade Bonsai',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
        {
            id: 9,
            account_id: 1,
            scientific_name: 'Ficus elastica',
            common_name: 'Rubber Tree',
            acquired_at: new Date('3/25/24'),
            updated_at: dbNow(),
            created_at: dbNow(),
        },
    ];

    const _waterings: (typeof waterings.$inferInsert)[] = [
        // 1 Pothos
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.5',
            watered_at: new Date('12/3/23'),
        },
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('12/28/23'),
        },
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.35',
            watered_at: new Date('1/7/24'),
        },
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.4',
            watered_at: new Date('1/22/24'),
        },
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.1',
            watered_at: new Date('2/11/24'),
        },
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.3',
            watered_at: new Date('2/20/24'),
        },
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('3/5/24'),
        },
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('3/16/24'),
        },
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('4/13/24'),
        },
        {
            plant_id: 1,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.25',
            watered_at: new Date('5/6/24'),
        },
        // 2 Janet Craig Compacta
        {
            plant_id: 2,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.3',
            watered_at: new Date('12/19/23'),
        },
        {
            plant_id: 2,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('12/28/23'),
        },
        {
            plant_id: 2,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('1/31/24'),
        },
        {
            plant_id: 2,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.1',
            watered_at: new Date('2/11/24'),
        },
        {
            plant_id: 2,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('2/29/24'),
        },
        {
            plant_id: 2,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('3/23/24'),
        },
        {
            plant_id: 2,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('4/18/24'),
        },
        // 3 Peacock Plant
        {
            plant_id: 3,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('12/28/23'),
        },
        {
            plant_id: 3,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.3',
            watered_at: new Date('1/7/24'),
        },
        {
            plant_id: 3,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.3',
            watered_at: new Date('1/25/24'),
        },
        {
            plant_id: 3,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.3',
            watered_at: new Date('2/11/24'),
        },
        {
            plant_id: 3,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.3',
            watered_at: new Date('2/20/24'),
        },
        {
            plant_id: 3,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('3/5/24'),
        },
        {
            plant_id: 3,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.3',
            watered_at: new Date('3/23/24'),
        },
        {
            plant_id: 3,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('4/13/24'),
        },
        {
            plant_id: 3,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.3',
            watered_at: new Date('5/6/24'),
        },
        // 4 Zanzibar Gem
        {
            plant_id: 4,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.7',
            watered_at: new Date('3/31/24'),
        },
        {
            plant_id: 4,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.5',
            watered_at: new Date('5/2/24'),
        },
        // 5 Spiderwort
        {
            plant_id: 5,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.45',
            watered_at: new Date('3/31/24'),
        },
        {
            plant_id: 5,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.3',
            watered_at: new Date('4/13/24'),
        },
        {
            plant_id: 5,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.25',
            watered_at: new Date('5/6/24'),
        },
        // 6 Parlor Palm
        {
            plant_id: 6,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.35',
            watered_at: new Date('3/31/24'),
        },
        {
            plant_id: 6,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('4/13/24'),
        },
        {
            plant_id: 6,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.15',
            watered_at: new Date('5/6/24'),
        },
        // 7 Gold Crest False Aralia
        {
            plant_id: 7,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.1',
            watered_at: new Date('3/31/24'),
        },
        {
            plant_id: 7,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.1',
            watered_at: new Date('4/13/24'),
        },
        {
            plant_id: 7,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.2',
            watered_at: new Date('5/2/24'),
        },
        // 8 Jade Dwarf Bonsai
        {
            plant_id: 8,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.15',
            watered_at: new Date('3/31/24'),
        },
        {
            plant_id: 8,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.1',
            watered_at: new Date('4/18/24'),
        },
        {
            plant_id: 8,
            created_at: dbNow(),
            watered_by_user_id: 1,
            amount: '0.05',
            watered_at: new Date('5/6/24'),
        },
    ];

    logFunction(seedDb, 'Dropping all data');
    await db.delete(accounts);
    await db.delete(plants);
    await db.delete(waterings);
    await db.delete(users);

    await db.transaction(async (tx) => {
        await tx.insert(accounts).values(_accounts);
        await tx.insert(users).values(_users);
        await tx.insert(plants).values(_plants);
        await tx.update(accounts).set({
            owner_user_id: 1,
        }).where(eq(accounts.id, 1));
        await tx.insert(waterings).values(_waterings);
    });

    logFunction(seedDb, 'Seeded db successfully!');
    await client.end();
    process.exit(0);
};

seedDb();
