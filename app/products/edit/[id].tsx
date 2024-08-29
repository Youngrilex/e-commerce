import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditProduct = () => {
  const [formData, setFormData] = useState({ name: '', description: '', price: '', category: '', image: '' });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const product = await res.json();
      setFormData(product);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/products');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for name, description, price, category, image */}
        <button type="submit" className="bg-accent text-white px-4 py-2 mt-4 rounded">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
