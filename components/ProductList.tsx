import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products?.map((product) => (
        <div key={product.id} className="bg-primary border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* <Link href={`/products/${product.id}`}> */}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={10000}
                
                priority
                height={1000}              
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg text-white font-bold">₦{product.price.toFixed(2)}</p>
              </div>
            </div>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
