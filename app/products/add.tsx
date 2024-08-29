import { useCreateProductMutation } from '@/lib/redux/slice/productApi';
import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';





const AddProduct = () => {

const [createProduct,{isLoading,data,isError, isSuccess}] = useCreateProductMutation()
  const {handleSubmit,register}= useForm<CreateProduct>({
    defaultValues:{   id:Date.now(),name: '', description: '', price: null, category: '', image: '' }
  })



  const onSubmit =(value:CreateProduct)=>{
console.log(value);

createProduct(value)
  }

  useEffect(()=>{
    if(isSuccess){
console.log("is success");
    }
    if(isError){
      console.log("it is error");
    }
  },[isSuccess, isError])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
       
    {...register("name")}
        placeholder="Product Name"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="text"
 
        {...register("description")}
        placeholder="Description"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="number"
     
        {...register("price")}
        placeholder="Price"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <input
        type="text"
      
        {...register("category")}
        placeholder="Category"
        className="w-full px-4 py-2 border rounded-lg"
      />
  
      <input
        type="text"
       
        {...register("image")}
        placeholder="Image URL"
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold">
        {isLoading ? 'Saving...':"Save"}
      </button>
    </form>
    </div>
  );
};

export default AddProduct;
