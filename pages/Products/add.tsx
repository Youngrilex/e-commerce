import { useState } from 'react';
import { useRouter } from 'next/router';

const AddProduct = () => {
  const [formData, setFormData] = useState({ name: '', description: '', price: '', category: '', image: '' });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/products');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for name, description, price, category, image */}
        <button type="submit" className="bg-accent text-white px-4 py-2 mt-4 rounded">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
