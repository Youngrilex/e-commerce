import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Product } from '../types/product';
import Layout from '@/components/Layout';
import ProductForm from '@/components/ProductForm';
import { useGetProductsQuery, useLazyGetProductsQuery } from '@/lib/redux/slice/productApi';

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([1000, 100000]);

  const { data, error, isLoading } = useGetProductsQuery({});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: </div>;




  console.log({data}, "by ayobami");

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:3001/products');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const handleSaveProduct = (product: Product) => {
    const newProduct = {
      ...product,
      id: product.id, // Ensure ID is present
    };
    console.log('Saving product:', product);  // Debug log
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      console.log('Updated products:', updatedProducts);  // Debug log
      return updatedProducts;
    });
    setFilteredProducts((prevFilteredProducts) => {
      const updatedFilteredProducts = [...prevFilteredProducts, newProduct];
      console.log('Updated filtered products:', updatedFilteredProducts);  // Debug log
      return updatedFilteredProducts;
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        (category === 'all' || product.category === category) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      )
    );
  }, [category, priceRange, products]);

  return (
    <Layout>
      <div className="bg-accent mx-auto pt-24 p-4">
        <div className="flex flex-col md:flex-row md:justify-between mb-6 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mb-4 md:mb-0 md:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Categories</option>
              <option value="earbuds">Earbuds</option>
              <option value="smartwatches">Smartwatches</option>
              <option value="phone-cases">Phone Cases</option>
              <option value="laptop-accessories">Laptop Accessories</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div>
              <label className="block text-sm mb-1 text-gray-600">Price Range</label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">₦{priceRange[0]} - ₦{priceRange[1]}</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-4">Add a New Product</h1>
          <ProductForm onSave={handleSaveProduct} />
        </div>

        <ProductList products={filteredProducts} />
      </div>    
    </Layout>

    
  );
};

export default Shop;
