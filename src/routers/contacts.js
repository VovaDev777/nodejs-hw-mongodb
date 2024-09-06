import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  patchContactController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:id', ctrlWrapper(getContactByIdController));

contactsRouter.post("/", ctrlWrapper(addContactController));

contactsRouter.patch("/:id", ctrlWrapper(patchContactController));

export default contactsRouter;
