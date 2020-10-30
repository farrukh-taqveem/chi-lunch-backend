import { Meal, mealDoc } from "../models/meal.model";
import baseController from "./base.controller";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
import { NextFunction, Request, Response } from "express";

export default class mealController extends baseController {
  constructor() {
    super(Meal);
  }

  getSummary = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const map = {}
      const paymentPerUser = await Meal.aggregate([
        {
          $unset: ["type", "date", "members", "cost"],
        },
        {
          $unwind: "$payments",
        },
        {
          $group: {
            _id: "$payments.paidBy",
            payment: { $sum: "$payments.amount" },
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "_id",
            as: "user",
          },
        },
      ]);
      for (const item of paymentPerUser){
        map[item._id] = [item];
      }
      const billPerUser = await Meal.aggregate([
        {
          $unset: ["type", "date", "payments"],
        },
        {
          $addFields: {
            perMember: {
              $divide: ["$cost", { $size: "$members" }],
            },
          },
        },
        {
          $unset: ["cost"],
        },
        {
          $unwind: "$members",
        },
        {
          $group: {
            _id: "$members",
            bill: { $sum: "$perMember" },
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "_id",
            as: "user",
          },
        },
      ]);

      for (const item of billPerUser){
        if(item._id in map){
          map[item._id].bill = item.bill;
        }else{
          item.amount = 0;
          map[item._id] = item;
        }
      }

      res.status(200).json({
        status: "success",
        data: billPerUser,
      });
    }
  );
}
