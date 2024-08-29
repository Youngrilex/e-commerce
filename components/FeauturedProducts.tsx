import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { id: 1, name: 'Smartwatch Pro', price: '₦20,000', image: '/product-1.jpg' },
  { id: 2, name: 'Wireless Earpod', price: '₦8,500', image: '/product-2.jpg' },
  { id: 3, name: 'Bluetooth Speaker', price: '₦24,000', image: '/product-9.jpg' },
  { id: 4, name: 'Phone case', price: '₦5,000', image: '/product-4.jpg' },
  { id: 5, name: 'Gaming Mouse', price: '₦6,000', image: '/product-5.jpg' },
  { id: 6, name: 'Wireless Charger', price: '₦17,000', image: '/product-6.jpg' },
  { id: 7, name: 'Portable Power Bank', price: '₦15,000', image: '/product-7.jpg' },
  { id: 8, name: 'Wireless Keyboard', price: '₦9,000', image: '/product-8.jpg' },
];

const FeauturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="store-section py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Featured Products</h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <Link href="/store">
               
                  <div className="border bg-primary rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={1000}
                      height={1000}
                      className="w-full h-[300px] object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-white">{product.price}</p>
                    </div>
                  </div>
              
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeauturedProducts;
