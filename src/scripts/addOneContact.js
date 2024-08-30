import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
  const contactsList = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  contactsList.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));
};

addOneContact();
