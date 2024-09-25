import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import {
  contactsAddSchema,
  contactsPatchSchema,
} from '../validation/contacts.js';
import isValidId from '../middlewares/isValidId.js';
import authenicate from '../middlewares/authenicate.js';

const contactsRouter = Router();

contactsRouter.use(authenicate);

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:id', isValidId, ctrlWrapper(getContactByIdController));

contactsRouter.post(
  '/',
  validateBody(contactsAddSchema),
  ctrlWrapper(addContactController),
);

contactsRouter.patch(
  '/:id',
  isValidId,
  validateBody(contactsPatchSchema),
  ctrlWrapper(patchContactController),
);

contactsRouter.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

export default contactsRouter;
