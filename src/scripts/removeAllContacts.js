import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    return await fs.writeFile(PATH_DB, JSON.stringify([]));
};

removeAllContacts();
