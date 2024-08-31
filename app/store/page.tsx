"use client"
import React, { useState, useEffect } from "react";
import ProductList from "@/components/ProductList";
import AddProduct from "../products/addproduct";
import { Product } from "@/types/types";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Shop: React.FC = () => {
  const initialProducts = JSON.parse(localStorage.getItem("productsLists") || "[]") as Product[];
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([1000, 100000]);
  const [isVisible, setIsVisible] = useState(false);

  const addProductVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("productsLists", JSON.stringify(filteredProducts));
  }, [filteredProducts]);

  const handleAddProduct = (product: Product) => {
    setFilteredProducts((prevProducts) => [...prevProducts, product]);
    toast.success("New product added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = filteredProducts.filter((product) => product.id !== id);
    setFilteredProducts(updatedProducts);
    toast.info("Product deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    const filtered = initialProducts.filter((product) => {
      return (
        (category === "" || product.category === category) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      );
    });
    setFilteredProducts(filtered);
  }, [category, priceRange]);

  return (
    <div className="bg-accent mx-auto pt-24 p-4">
      <ToastContainer />
      <div className="flex flex-col md:flex-row md:justify-between mb-6 p-4 bg-white shadow-lg rounded-lg space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Categories</option>
            <option value="headphones">Headphones</option>
            <option value="smart devices">Smart Devices</option>
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
          <AddProduct onAddProduct={handleAddProduct} />
        </div>
      )}
      <ProductList products={filteredProducts} onDeleteProduct={handleDeleteProduct} />
    </div>
  );
};

export default Shop;
