import { addItem, getItems, updateItem } from "@/lib/mock-server";
import {
  setProduct,
  setProductIsVisible,
  setSelectedProduct,
} from "@/lib/redux/slice/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface AddProductProps {}

const AddProduct: React.FC<AddProductProps> = ({}) => {
  const dispatch = useAppDispatch();
  const { selectedProduct, isProductVisible } = useAppSelector(
    (state) => state.product,
  );

  const { handleSubmit, register, watch, setValue, reset } = useForm<Product>({
    defaultValues: {
      id: Date.now().toString(),
      name: "",
      description: "",
      price: 0,
      image: "",
      category: "",
    },
  });

  const onSubmit = (value: Product) => {
    console.log(value);
    if (selectedProduct) {
      updateItem(value);
      dispatch(setProduct(getItems()));
      dispatch(setProductIsVisible(!isProductVisible));
      toast.success("Product updated successfully");
      dispatch(setSelectedProduct(null));
      reset();
      return;
    }

    addItem(value);
    dispatch(setProduct(getItems()));
    dispatch(setProductIsVisible(!isProductVisible));
    toast.success("Product Added successfully");
    reset();
    return;
  };

  useEffect(() => {
    if (selectedProduct) {
      setValue("id", selectedProduct.id);
      setValue("name", selectedProduct.name);
      setValue("description", selectedProduct.description);
      setValue("category", selectedProduct.category);
      setValue("image", selectedProduct.image);
      setValue("price", selectedProduct.price);
    }
  }, [selectedProduct, setValue]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center sm:text-3xl">
        {selectedProduct !== null ? "Edit Product" : "Add New Product"}
      </h1>
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
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              id="image"
              type="file"
              // {...register("image")}
              onChange={(e) => {
                const file = e.target.files ? e.target.files[0] : null;
                setValue("image", file ? URL.createObjectURL(file) : "");
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {watch("image") !== "" && (
              <div className="mt-2">
                <Image
                  src={watch("image")}
                  alt="Product-Preview"
                  width={200}
                  height={200}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
            <p className="mt-2 text-sm text-gray-600">
              Upload an image file for the product.
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
        >
          {selectedProduct !== null ? "Update Product" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
