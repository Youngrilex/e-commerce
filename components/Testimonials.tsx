import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Amazing gadgets! The quality is top-notch, and the customer service is excellent. Highly recommended!",
    rating: 5,
    image: "/t-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "I love the sleek design of the products. Fast delivery and great support. Will definitely shop again!",
    rating: 4,
    image: "/t-2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    review:
      "Great value for the price. The wireless earbuds I bought are fantastic. Very satisfied with my purchase!",
    rating: 5,
    image: "/t-3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-accent py-12 lg:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-black">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-yellow-500 mb-4">
                {"★".repeat(testimonial.rating)}{" "}
                {"☆".repeat(5 - testimonial.rating)}
              </p>
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
