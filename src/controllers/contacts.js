import * as contactsServices from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getAllContactsController = async (req, res, next) => {
  const data = await contactsServices.getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  const data = await contactsServices.getContactById(id);

  if (!data) {
    throw createHttpError(404, `Contact with ${id} not found`);
  }
  res.json({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data,
  });
};

export const addContactController = async(req, res) => {
  
  const data = await contactsServices.createContact(req.body);

  res.status(201).json({
    status: 201,
    message: 
  })
};