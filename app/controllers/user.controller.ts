import { User, userDoc } from '../models/user.model';
import baseController from './base.controller';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import { NextFunction, Request, Response } from 'express';

export default class userController extends baseController {
    constructor() {
        super(User);
    }
}
