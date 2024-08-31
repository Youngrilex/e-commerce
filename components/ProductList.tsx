import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/types";

interface ProductListProps {
  products: Product[];
  onDeleteProduct: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDeleteProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-primary border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform duration-300 relative"
        >
          <Link href={`../app/products/${product.id}`}>
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                priority
                className="w-full h-64 sm:h-80 object-cover transition-transform transform duration-300"
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
          </Link>
          <button
            onClick={() => onDeleteProduct(product.id)}
            className="absolute top-2 right-2 bg-red-600 text-white rounded-full px-3 py-1 hover:bg-red-700 focus:outline-none"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
