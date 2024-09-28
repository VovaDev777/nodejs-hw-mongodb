import Contacts from "../db/models/Contacts.js";

export const getAllContacts = () => Contacts.find();

export const getContactById = id => Contacts.findById(id);