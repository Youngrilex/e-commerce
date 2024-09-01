"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getItems } from "@/lib/mock-server";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const items = getItems();
    const selectedProduct = items.find(
      (item: { id: string | string[] }) => item.id === productId
    );
    setProduct(selectedProduct || null);
    console.log("object", selectedProduct);
    setLoading(false);
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  console.log("object", product.details);

  return (
    <div className="min-h-[90vh] bg-accent p-4 sm:p-6 lg:p-8">
    
        <div className="flex gap-4 mt-24">
          <Link href="/store">
            <FiArrowLeft className="text-xl text-black bg-primary hover:text-secondary transition-colors rounded-full duration-200 w-10 h-10 p-2 shadow-lg" />
          </Link>
          <h1 className="text-3xl font-bold mb-6 text-primary">
            {product.name}
          </h1>
        </div>
        <div className="flex gap-12 flex-col sm:flex-col md:flex-row">
          <div className="relative w-full h-64 sm:h-80 mb-6">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full ">
            <p className="text-xl font-bold mb-6 text-primary">
              Category: {product.category}
            </p>
            <p className="text-lg text-black mb-6 leading-relaxed">
              {product.details}
            </p>
            <p className="text-2xl font-bold mb-6 text-primary">
              ₦{product.price.toFixed(2)}
            </p>
          </div>
        </div>
     
    </div>
  );
}

export default ProductDetails;
