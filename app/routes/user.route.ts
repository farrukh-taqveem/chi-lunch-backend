import userController from "../controllers/user.controller";
import express, { Router } from "express";

export default class userRoutes {
  router: Router;
  controller: userController;
  constructor() {
    this.router = express.Router();
    this.controller = new userController();
    this.routes();
  }

  routes() {
    this.router
      .route("/")
      .post(this.controller.getOne)
      .get(this.controller.getAll)
      .patch(this.controller.updateOne)
      .delete(this.controller.deleteOne);
  }
}