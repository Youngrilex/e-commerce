import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-[70vh] sm:h-full flex flex-col sm:flex-row bg-primary text-white pt-12 relative">
      {/* Background Image */}
      <div className="absolute z-0 inset-0 overflow-hidden">
        <Image
          src="/bgg.jpg" // Replace with your image path
          alt="Hero Background"
          fill
          className="object-cover h-full w-full"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 py-16 text-center sm:w-1/2">
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
          Discover the Latest <br />
          <span className="text-black">Tech Gadgets</span>
        </h1>
        <p className="text-base mb-8 sm:text-lg md:text-xl lg:text-2xl">
          Explore our curated selection of sleek wireless earbuds, smartwatches,
          and more.
        </p>
        <Link
          href="/store"
          className="bg-black/90 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-accent-dark transition duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative hidden sm:flex z-10 items-center justify-center mt-8 sm:mt-0 sm:w-1/2">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-full border-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/gadget.jpg"
            alt="Gadget Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
