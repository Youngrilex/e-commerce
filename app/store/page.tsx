"use client";
import React, { useState, useEffect, useCallback, Suspense } from "react";
import ProductList from "@/components/ProductList";
import AddProduct from "@/components/add-product";
import { getItems } from "@/lib/mock-server";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  setFilter,
  setProduct,
  setProductIsVisible,
  setSelectedProduct,
} from "@/lib/redux/slice/productSlice";
import Loading from "../../components/loader";

function Shop() {
  const { products, filter, isProductVisible } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { category, priceRange } = filter;

  useEffect(() => {
    const data: Product[] = getItems();
    dispatch(setProduct(data));
  }, [dispatch]);

  const filterProducts = useCallback(() => {
    const filtered = products.filter((product) => {
      if (category !== "") {
        console.log("cat not empty");
        return product.category.toLowerCase() === category.toLowerCase();
      }
      return product;
    });
    // }).filter((product)=>{

    //   if(priceRange[0]){
    //  return   product.price >= priceRange[0] &&
    //     product.price <= priceRange[1]
    //   }
    //   return product
    // })
    setFilteredProducts(filtered);
  }, [category, products, priceRange]);

  console.log({ filteredProducts });

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-accent mx-auto pt-24 p-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0 my-3">
          <select
            value={category}
            onChange={({ target }) =>
              dispatch(
                setFilter({
                  type: "category",
                  value: target.value,
                })
              )
            }
            className="w-full md:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Category</option>
            {Array.from(new Set(products.map((pro) => pro.category))).map(
              (cat: string, idx: number) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              )
            )}
          </select>
          <button
            onClick={() => {
              dispatch(setProductIsVisible(!isProductVisible));
              dispatch(setSelectedProduct(null));
            }}
            className="bg-primary rounded-md px-4 py-2 text-white text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {/* {editingProduct ? "Edit Product" : "Add New Product"} */}
            Add New product
          </button>
        </div>

        {isProductVisible && (
          <div className="mt-6">
            <AddProduct />
          </div>
        )}
        <ProductList products={filteredProducts} />
      </div>
    </Suspense>
  );
}

export default Shop;
