import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import { Model } from 'mongoose';
import { NextFunction, Request, Response } from 'express';

class baseController {
    constructor(private Model: Model<any>) {}
    createOne = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const doc = await this.Model.create(req.body);
        res.status(201).json({
            status: 'success',
            data: doc
        });
    });
    updateOne = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const doc = await this.Model.findByIdAndUpdate(req.body.id, req.body);

        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data: doc,
        });
    });
    getOne = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const doc = await this.Model.findById(req.body);

        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data: doc
        });
    });
    getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const docs = await this.Model.find({});

        if (!docs) {
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data: docs
        });
    });
    deleteOne = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await this.Model.findByIdAndDelete(req.body.id);

        res.status(204).json({
            status: 'deleted',
            data: null,
        });
    });
}

export default baseController;
