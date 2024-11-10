import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => { 
    const data = await fs.readFile(PATH_DB);
    const parsData = JSON.parse(data);
    for (let i = 0; i < number; i++) {
        parsData.push(createFakeContact())
      }
      await fs.writeFile(PATH_DB, JSON.stringify(parsData, null, 2), 'utf-8');
  };

generateContacts(5);


