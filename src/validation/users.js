import Joi from "joi";
import { emailRegexp } from "../constants/user.js";

export const userSignupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
});