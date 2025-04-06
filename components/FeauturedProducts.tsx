import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { id: 1, name: "iPhone 16", price: "₦20,000", image: "/iphone-16r.png" },
  { id: 2, name: "iPhone 16 Plus", price: "₦8,500", image: "/iphone-16p.jpg" },
  {
    id: 3,
    name: "iPhone 16 Pro",
    price: "₦24,000",
    image: "/iphone-16-pro.jpg",
  },
  { id: 4, name: "iPhone 16 Pro Max", price: "₦5,000", image: "/iphone-16-promax.jpg" },
  { id: 5, name: "Samsung S25", price: "₦6,000", image: "/samsung-25.jpg" },
  {
    id: 6,
    name: "Samsung S25 Ultra",
    price: "₦17,000",
    image: "/samsung-s25.jpg",
  },
  {
    id: 7,
    name: "Apple Watch Series 8",
    price: "₦15,000",
    image: "/iwatch.jpg",
  },
  {
    id: 8,
    name: "Apple iPad Pro 13",
    price: "₦9,000",
    image: "/ipad.jpg",
  },
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
        breakpoint: 768,
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
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Featured Products
      </h2>
      <div className="container mx-auto px-7">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <Link href="/store">
                <div className="border bg-blue-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    className="w-full h-[300px] object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="text-gray-200">{product.price}</p>
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
