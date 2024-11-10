import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const countData = JSON.parse(data);
    return countData.length;
 };

console.log(await countContacts());
