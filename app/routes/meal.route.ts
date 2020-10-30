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
    this.router
      .route("/")
      .post(this.controller.createOne)
      .get(this.controller.getAll)
      .patch(this.controller.updateOne)
      .delete(this.controller.deleteOne);

    this.router.route("/:id").get(this.controller.getOne);
  }
}
