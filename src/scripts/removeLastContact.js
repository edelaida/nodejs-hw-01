import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    const data = await fs.readFile(PATH_DB);
    const allData = JSON.parse(data);
    const number = allData.length;
       
    if (number > 0) {
        number-=1;
        allData.slice(0, number);
    }
      await fs.writeFile(PATH_DB, JSON.stringify(allData, null, 2), 'utf-8');
 };

removeLastContact();
