import {Schema, model} from "mongoose";
import { emailRegexp } from "../../constants/user";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: emailRegexp,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    
}, {versionKey: false, timestamps: true});

const User = model("user", userSchema);

export default User;