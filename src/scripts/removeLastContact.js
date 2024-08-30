import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    const db = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(db);
    if (contacts.length > 0) {
        contacts.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    } else {
        console.log("Contact's list is empty");
    }
};

removeLastContact();
