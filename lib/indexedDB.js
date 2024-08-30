// lib/indexedDB.js
import { openDB } from 'idb';

const DATABASE_NAME = 'myDatabase';
const STORE_NAME = 'todos';
const VERSION = 1;

export async function initDB() {
  const db = await openDB(DATABASE_NAME, VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
  return db;
}

export async function addTodo(todo) {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.add(todo);
  await tx.done;
}

export async function getTodos() {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  return await store.getAll();
}

export async function deleteTodo(id) {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.delete(id);
  await tx.done;
}
