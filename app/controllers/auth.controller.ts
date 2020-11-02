import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/appError';

 class authController {
    verifyRequest(req: Request, res: Response, next: NextFunction){
        const date = new Date(Date.now());
        const m =  date.getMonth();
        const y = date.getFullYear();
        const d = date.getDate();
        const matchingKey = `c${m + d}h${y-m-d}i`
        const {verificationKey} = req.body;
        if(matchingKey === verificationKey){
            next();
        }
        else{
            next(new AppError('UnAuthorized Request, Please Provide Verification Key', 401))
        }
    }
}

const authorization = new authController();
export default authorization