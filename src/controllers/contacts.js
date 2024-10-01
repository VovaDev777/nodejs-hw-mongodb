import * as contactsServices from '../services/contacts.js';
import createHttpError from 'http-errors';
import parsePaginationParams from '../utils/parsePaginationParams.js';
import parseSortParams from '../utils/parseSortParams.js';
import { sortFields } from '../db/models/Contacts.js';
import saveFileToUploadDir from '../utils/saveFileToUploadDir.js';
import saveToCloudinary from '../utils/saveToCloudinary.js';
import { env } from '../utils/env.js';


const enableCloudinary = env("ENABLE_CLOUDINARY");


export const getAllContactsController = async (req, res, next) => {
  const { perPage, page } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams({ ...req.query, sortFields });
  const { _id: userId } = req.user;

  const data = await contactsServices.getContacts({
    perPage,
    page,
    sortBy,
    sortOrder,
    userId,
  });

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  console.log({id});
  const { _id: userId } = req.user;
  const data = await contactsServices.getContact({_id: id, userId});

  if (!data) {
    throw createHttpError(404, `Contact with ${id} not found`);
  }
  res.json({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data,
  });
};

export const addContactController = async (req, res) => {
  let photo;
  if (req.file) {
    if(enableCloudinary === "true") {
      photo = await saveToCloudinary(req.file, "photo");
    } else {
      photo =  await saveFileToUploadDir(req.file);
    }
  }
  // console.log(req.body);
  // console.log(req.file);
  const { _id: userId } = req.user;

  const data = await contactsServices.createContact({ ...req.body, userId, photo});

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data,
  });
};

export const patchContactController = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const result = await contactsServices.updateContact({ _id: id, userId }, req.body);

  if (!result) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.data,
  });
};

export const deleteContactController = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const data = await contactsServices.deleteContact({ _id: id, userId});

  if (!data) {
    throw createHttpError(404, 'Contact not found');
  }
  res.status(204).send();
};
