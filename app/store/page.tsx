"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import ProductList from "@/components/ProductList";
import {
  useLazyGetProductsQuery,
} from "@/lib/redux/slice/productApi";
import { TQueryActionCreatorResult } from "@/lib/redux/apiSlice";
import AddProduct from "../products/addproduct";

const Shop: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([1000, 100000]);

  const [getProductsQuery, { data: products, error, isLoading }] =
    useLazyGetProductsQuery();
  const triggerRef = useRef<TQueryActionCreatorResult>();


  useEffect(() => {
    getProductsQuery({
      category: category,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  }, [getProductsQuery, category, priceRange]);
  
  

  const [isVisible, setIsVisible] = useState(false);

  const addProductVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  

  return (
    <>
  <div className="bg-accent mx-auto pt-24 p-4">
  <div className="flex flex-col md:flex-row md:justify-between mb-6 p-4 bg-white shadow-lg rounded-lg space-y-4 md:space-y-0">
    <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">All Categories</option>
        <option value="earbuds">Earbuds</option>
        <option value="smartwatches">Smartwatches</option>
        <option value="phone cases">Phone Cases</option>
        <option value="laptop accessories">Laptop Accessories</option>
      </select>
      <button
        onClick={addProductVisibility}
        className="bg-primary rounded-md px-4 py-2 text-white text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Add New Product
      </button>
    </div>
    <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
      <div className="w-full">
        <label className="block text-sm mb-1 text-gray-600">Price Range</label>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            min="1000"
            max="100000"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="1000"
            max="100000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          ₦{priceRange[0]} - ₦{priceRange[1]}
        </p>
      </div>
    </div>
  </div>
  {isVisible && (
    <div className="mt-6">
      <AddProduct />
    </div>
  )}
  <ProductList products={products} />
</div>

    </>
  );
};

export default Shop;
