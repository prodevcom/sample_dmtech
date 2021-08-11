import {Application, Router} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

// Controllers
import {UserController} from "./controllers/user.controller";
import {appEnv} from "./constants/server.constants";
import errorMiddleware from "./middleware/error.middleware";

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.connectDatabase();
        this.initializeMiddlewares();
        this.setControllers();
        this.setErrorHandling();
    }

    private connectDatabase() {
        mongoose.Promise = global.Promise;
        mongoose.connect(appEnv.MONGO_SRV, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json({limit: "50mb"}));
        this.app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
        this.app.use(cors());
    }

    private setErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private setControllers() {
        const router = Router();
        router.use("/user", new UserController().router);
        this.app.use("/v1", router);
    }
}

export default new App().app;
