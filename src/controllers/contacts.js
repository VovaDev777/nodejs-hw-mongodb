import * as contactsServices from '../services/contacts.js';
import createHttpError from 'http-errors';
import parsePaginationParams from '../utils/parsePaginationParams.js';

export const getAllContactsController = async (req, res, next) => {
  const {perPage, page} = parsePaginationParams(req.query);
  console.log(perPage);
  console.log(page);
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
		message: "Successfully created a contact!",
		data,
  });
};

export const patchContactController =  async(req, res) => {
  
  const {id} = req.params;
  const result = await contactsServices.updateContact({_id: id}, req.body);

  if (!result) {
    throw createHttpError(404, "Contact not found");
  }

  res.json({
    status: 200,
	message: "Successfully patched a contact!",
	data: result.data,
  });
};

export const deleteContactController =  async(req, res) => {
  const {id} = req.params;
  const data = await contactsServices.deleteContact({_id: id});

  if (!data) {
    throw createHttpError(404, "Contact not found");
  }
  res.status(204).send();
};

