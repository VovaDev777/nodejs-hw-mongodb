import Contacts from "../db/models/Contacts.js";

export const getAllContacts = () => Contacts.find();
