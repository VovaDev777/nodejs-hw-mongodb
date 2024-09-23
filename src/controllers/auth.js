import createHttpError from 'http-errors';
import * as authServices from "../services/auth.js";

export const signupController = async(req, res) => {
    const newUser = await authServices.signup(req.body);

    res.status(201).json({
        status: 201,
        message: "Successfully registered a user!",
        data: newUser,
    });
};


export const signinController = async(req, res) => {
    const signinCreds = await authServices.signin(req.body);


    
};
