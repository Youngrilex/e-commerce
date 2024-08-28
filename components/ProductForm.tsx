import { FC, useState } from 'react';
import { Product } from '../types/product';

interface ProductFormProps {
  initialProduct?: Product;
  onSave: (product: Product) => void;
}

const ProductForm: FC<ProductFormProps> = ({ initialProduct, onSave }) => {
  const [product, setProduct] = useState<Product>({
    id: initialProduct?.id || '',
    name: initialProduct?.name || '',
    description: initialProduct?.description || '',
    price: initialProduct?.price || 0,
    category: initialProduct?.category || '',
    image: initialProduct?.image || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(product);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="text"
        name="id"
        value={product.id}
        onChange={handleChange}
        placeholder="id"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button type="submit" className="bg-accent text-white px-6 py-3 rounded-lg font-semibold">
        Save
      </button>
    </form>
  );
};

export default ProductForm;
