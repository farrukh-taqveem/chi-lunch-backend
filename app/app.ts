import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import  errorHandler from './utils/errorHandler';
import  userRoute from './routes/user.route';
import  mealRoute from './routes/meal.route';

import bodyParser from "body-parser";
import cors from 'cors';

class App {
  app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.routing();
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(errorHandler);
    this.app.use(cors());
    this.app.use(helmet({
      contentSecurityPolicy: false,
    }))
    this.app.use(express.static('view/build'))
  }
  
  private routing() {
    this.app.use("/api/user", new userRoute().router);
    this.app.use("/api/meal", new mealRoute().router);
    this.app.all("*", (req: Request, res: Response) => {
      res.status(404).send({
        message: `Can't find ${req.originalUrl} on this server!`,
      });
    });
  }
}

export default new App().app;
