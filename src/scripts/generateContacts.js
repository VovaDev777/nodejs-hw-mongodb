import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  const contactsList = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  const contacts = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  contactsList.push(...contacts);
  await fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));
};

generateContacts(5);
