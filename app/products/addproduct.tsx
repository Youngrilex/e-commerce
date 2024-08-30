import { useCreateProductMutation } from "@/lib/redux/slice/productApi";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [createProduct, { isLoading, data, isError, isSuccess }] =
    useCreateProductMutation();
  const { handleSubmit, register } = useForm<CreateProduct>({
    defaultValues: {
      id: Date.now(),
      name: "",
      description: "",
      price: null,
      category: "",
      image: "",
    },
  });

  const onSubmit = (value: CreateProduct) => {
    console.log(value);

    createProduct(value);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("is success");
    }
    if (isError) {
      console.log("it is error");
    }
  }, [isSuccess, isError]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
    <h1 className="text-2xl font-bold mb-6 text-center sm:text-3xl">Add New Product</h1>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
    >
      <div className="flex flex-col gap-4">
        <input
          type="text"
          {...register("name")}
          placeholder="Product Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          {...register("description")}
          placeholder="Description"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="number"
          {...register("price")}
          placeholder="Price"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          {...register("category")}
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
              {...register("image")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="mt-2 text-sm text-gray-600">Upload an image file for the product.</p>
          </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
      >
        {isLoading ? "Saving..." : "Save"}
      </button>
    </form>
  </div>
  );
};

export default AddProduct;
