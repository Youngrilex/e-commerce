import { GetServerSideProps, NextPage } from 'next';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: NextPage<ProductDetailsProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | AkinTech Store</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={`https://yourdomain.com/products/${product.id}`} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />
      </Head>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="w-full lg:w-1/2 h-96 object-cover rounded-lg"
          />
          <div className="lg:ml-6 mt-4 lg:mt-0">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">₦{product.price.toFixed(2)}</p>
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  
  // Fetch product from an API or database
  const res = await fetch(`http://localhost:3001/products/${id}`);
  const product: Product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default ProductDetails;
