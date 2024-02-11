import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {

    const database = await openDB('jate', 1);
    const tx = database.transaction('jate', 'readwrite');
    const objectStore = tx.objectStore('jate');
    const request = objectStore.put({ id: 1, value: content });
    const result = await request;
  }
  
  // TODO: Add logic for a method that gets all the content from the database
  export const getDb = async () => {
      const database = await openDB('jate', 1);
      const tx = database.transaction('jate', 'readonly');
      const objectStore = tx.objectStore('jate');
      const request = objectStore.get(1);
      const result = await request;
      result ? console.log("Date retrieved", result.value) : console.log("data not found");
      return result?.value;
  
  }
  

initdb();
