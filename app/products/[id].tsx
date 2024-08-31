import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "@/types/types";
import data from "../../public/db.json"; // Adjust the import path according to your structure
import Image from "next/image";

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      // Convert id to a number for comparison
      const productId = Number(id);

      // Find the product with the matching id, converting p.id to a number
      const matchingProduct = data.productsLists.find(
        (p) => Number(p.id) === productId
      );

      if (matchingProduct) {
        const productWithNumberId: Product = {
          ...matchingProduct,
          id: productId, // Ensure id is a number
        };
        setProduct(productWithNumberId);
      } else {
        setProduct(null);
      }

      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-primary border rounded-lg overflow-hidden shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-64 sm:h-80 object-cover mb-4"
        />
        <p className="text-lg text-gray-200 mb-4">{product.description}</p>
        <p className="text-2xl text-white font-bold mb-4">
          ₦{product.price.toFixed(2)}
        </p>
        <p className="text-md text-gray-300">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
