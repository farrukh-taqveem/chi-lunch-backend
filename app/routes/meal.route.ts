import mealController from "../controllers/meal.controller";
import express, { Router } from "express";

export default class userRoutes {
  router: Router;
  controller: mealController;
  constructor() {
    this.router = express.Router();
    this.controller = new mealController();
    this.routes();
  }

  routes() {
    this.router.get('/summary', this.controller.getSummary)

    this.router
      .route("/")
      .post(this.controller.createOne)

  }
}
