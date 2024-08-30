import { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {productsLists} from "@/db.json";


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  const use = {
    name: 'yusuf',
    dob:"yyyy'/mmm/dd"

  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(use));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* {products?.map((product) => ( */}
      {productsLists?.map((product) => (
        <div
          key={product.id}
          className="bg-primary border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform duration-300"
        >
          {/* <Link href={`/products/${product.id}`}> */}
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              priority
              className="w-full h-64 sm:80 object-cover transition-transform transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-200 mb-2 text-sm">
                {product.description}
              </p>
              <p className="text-xl text-white font-bold">
                ₦{product.price.toFixed(2)}
              </p>
            </div>
          </div>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
