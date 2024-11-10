import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);
    parseData.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(parseData, null, 2), 'utf-8');
};

addOneContact();
