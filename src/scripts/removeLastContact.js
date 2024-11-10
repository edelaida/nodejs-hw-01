import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    const data = await fs.readFile(PATH_DB);
    const allData = JSON.parse(data);
    let number = allData.length;
        if (number > 0) {
        number -= 1;
      await writeContacts(allData.slice(0, number));
    }
 };

removeLastContact();
