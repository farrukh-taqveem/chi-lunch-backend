import { Meal, mealDoc } from '../models/meal.model'
import baseController from './base.controller';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import { NextFunction, Request, Response } from 'express';

export default class mealController extends baseController {
    constructor() {
        super(Meal);
    }
}
