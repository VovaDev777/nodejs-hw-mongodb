import UserCollection from "../db/models/User.js";
import createHttpError from 'http-errors';
import bcrypt from "bcrypt";

export const signup = async (payload) => {
    const {email, password} = payload;
    const user = await UserCollection.findOne({email});
    if (user) {
        throw createHttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const data = await UserCollection.create({...payload, password: hashPassword});
    delete data._doc.password;

    return data._doc;
};

export const signin = async (payload) => {
    const {email, password} = payload;
    const user = await UserCollection.findOne()
};