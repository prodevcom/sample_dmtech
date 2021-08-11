import {User} from "../models/user.model";
import {IUser} from "../interfaces/user.interface";

export class UserService {

    public add(user: IUser): Promise<IUser> {
        return new User(user).save();
    }

}
