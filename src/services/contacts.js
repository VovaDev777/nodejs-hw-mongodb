import Contacts from "../db/models/Contacts.js";

export const getAllContacts = async ({perPage, page}) => {
    const skip = (page - 1) * perPage;
    const data = await Contacts.find().skip(skip).limit(perPage);

    return data;
};

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

export const deleteContact = filter => Contacts.findOneAndDelete(filter);