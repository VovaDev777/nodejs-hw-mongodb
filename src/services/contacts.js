import Contacts from "../db/models/Contacts.js";

export const getAllContacts = () => Contacts.find();

export const getContactById = id => Contacts.findById(id);

export const createContact = payload => Contacts.create(payload);


export const updateContact = async(filter, data, options = {}) => {
    const rawResult = await Contacts.findOneAndUpdate(filter, data, {
        new: true, 
        includeResultMetadata: true,
        ...options,
    });
    if (!rawResult || !rawResult.value) return null;

    return {
        data: rawResult.value,
        isNew: Boolean(rawResult?.lastErrorObject?.upserted),
    };
};