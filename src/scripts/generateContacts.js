import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => { 
  const data = await readContacts();
    // const data = await fs.readFile(PATH_DB);
    // const parsData = JSON.parse(data);
    for (let i = 0; i < number; i++) {
        data.push(createFakeContact())
      }
      await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
  };

generateContacts(5);


