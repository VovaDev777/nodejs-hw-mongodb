import {Schema, model} from "mongoose";
import { contactTypeList } from "../../constants/contacts.js";


const contactsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    isFavourite: {
        type: Boolean,
        default: false,
    },
    contactType: {
        type: String,
        enum: contactTypeList,
        required: true,
        default: "personal",
    },
}, {versionKey: false, timestamps: false});

const Contacts = model("contacts", contactsSchema);

export const sortFields = ["name", "email", "isFavourite"];

export default Contacts;