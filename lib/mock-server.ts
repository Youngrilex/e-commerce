import { products } from "./constants";

// Initialize local storage with some default data if not already present
const initializeLocalStorage = () => {
  if (!localStorage.getItem("items")) {
    localStorage.setItem("items", JSON.stringify(products));
  }
};

// Get items from local storage
export const getItems = () => {
  initializeLocalStorage();
  const items = localStorage.getItem("items");
  return items ? JSON.parse(items) : [];
};

// Add an item to local storage
export const addItem = (item: Product) => {
  console.log("it here");
  const items = getItems();
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
};

// Update an item in local storage
export const updateItem = (updatedItem: Product) => {
  let items = getItems();
  items = items.map((item: Product) =>
    item.id === updatedItem.id ? updatedItem : item,
  );
  localStorage.setItem("items", JSON.stringify(items));
};

// Delete an item from local storage
export const deleteItem = (id: string) => {
  const items = getItems();
  const filteredItems = items.filter((item: Product) => item.id !== id);
  localStorage.setItem("items", JSON.stringify(filteredItems));
};
