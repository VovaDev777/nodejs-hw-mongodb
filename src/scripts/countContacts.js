import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
    const db = await fs.readFile(PATH_DB, 'utf-8');
    const dpParse = JSON.parse(db);
    return dpParse.length;
};

console.log(await countContacts());


