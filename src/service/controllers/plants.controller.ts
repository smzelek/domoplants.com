import { NextFunction, Request, Response, Router } from "express";
import { PlantsAPI } from "../services/plants.service";

export const plantsController = Router();

const plantDetails = async (req: Request<{ id: number }, {}>, res: Response, next: NextFunction) => {
    try {
        const response = await PlantsAPI.loadPlant(req.params.id);
        if (response.error) {
            throw response.error;
        }
        res.send(response.result);
    } catch (err) {
        next(err);
    }
};
plantsController.get('/plant/:id', plantDetails);
