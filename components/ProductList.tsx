import Link from "next/link";
import Image from "next/image";
import {
  setProduct,
  setProductIsVisible,
  setSelectedProduct,
} from "@/lib/redux/slice/productSlice";
import { useAppDispatch } from "@/lib/redux/store";
import { deleteItem, getItems } from "@/lib/mock-server";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products?.map((product: Product) => (
        <div
          key={product.id}
          className="bg-primary border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform duration-300 relative"
        >
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
              <div className="flex flex-col sm:flex-row mx-auto justify-between">
                <p className="text-xl text-white font-bold">
                  ₦{parseFloat(`${product?.price}`).toFixed(2)}
                </p>
                <div className="flex gap-2">
                <Link href={`/store/${product.id}`}>
                    <button className="bg-white text-black rounded-md py-1 px-2 shadow-md">
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      dispatch(setProductIsVisible(true));
                      dispatch(setSelectedProduct(product));
                    }}
                    className="bg-blue-900 text-white rounded-md shadow-md px-3 py-1 hover:bg-blue-700 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteItem(product.id);
                      dispatch(setProduct(getItems()));
                    }}
                    className="bg-red-600 text-white rounded-md shadow-md px-3 py-1 hover:bg-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
