import {Document} from "mongoose";

export interface IUser extends Document {
    fullName: String;
    email: String;
    password: String;
    birthdate: Date;
    alias: String;
    picture: String;
}
