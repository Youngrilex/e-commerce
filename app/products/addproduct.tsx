import { useState } from "react";
import { Product } from "@/types/types";

const AddProduct = ({ onAddProduct }: { onAddProduct: (product: Product) => void }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || price === "" || !category || !image) {
      alert("Please fill out all fields.");
      return;
    }

    const newProduct: Product = {
      id: Date.now(), // Generate a unique ID
      name,
      description,
      price: Number(price),
      category,
      image: URL.createObjectURL(image),
    };

    onAddProduct(newProduct);

    // Clear form after submission
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImage(null);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center sm:text-3xl">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
            placeholder="Price"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              id="image"
              type="file"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="mt-2 text-sm text-gray-600">Upload an image file for the product.</p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
