import mongoose, {model} from "mongoose";
import {isValidEmail} from "../validators";
import {IUser} from "../interfaces/user.interface";

const UserScheme = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório'],
        unique: [true, 'E-mail já cadastrado'],
        validate: [isValidEmail, 'E-mail é inválido']
    },
    password: {
        type: String,
        required: [true, 'Senha é obrigatório']
    },
    birthdate: {
        type: Date,
        required: [true, 'Data de nascimento é obrigatório']
    },
    alias: {
        type: String,
        required: [true, 'Nome de usuário é obrigatório'],
        unique: [true, 'Nome de usuário já cadastrado'],
        lowercase: true
    },
    picture: {type: String},
});

export const User = model<IUser>("User", UserScheme);
