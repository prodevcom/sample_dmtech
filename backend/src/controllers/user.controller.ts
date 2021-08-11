import {NextFunction, Request, Response, Router} from "express";
import {UserService} from "../services/user.service";
import HttpException from "../exceptions/HttpException";

export class UserController {

    public router = Router();
    public service = new UserService();

    constructor() {
        this.setRoutes();
    }

    // Preset Routes
    private setRoutes() {
        this.router.route("/").post(this.add);
    }

    // Actions Methods
    private add = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.service.add(req.body);
            res.send(user);
        } catch (e) {
            next(new HttpException(404, e.message));
        }
    }

}
