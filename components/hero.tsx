import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col sm:flex-row bg-primary text-white pt-12 relative">
          <div className="absolute z-0 inset-0 overflow-hidden">
        <Image
          src="/bgg.jpg" // Replace with your image path
          alt="Hero Background"
          fill
          className="object-cover" 
            priority// Specify the
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-screen px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
        Discover the Latest <span className='text-black'>Tech Gadgets</span>
      </h1>
      <p className="text-lg mb-8 md:text-xl lg:text-2xl">
        Explore our curated selection of sleek wireless earbuds, smartwatches, and more.
      </p>
      <div className="">
        <Link
          href="/store"
          className="bg-black/90 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-accent-dark transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </div>
    <div className="inset-0 flex mx-6 items-center justify-center">
    <div className="relative w-[500px] h-[500px] overflow-hidden rounded-full border-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/gadget.jpg" 
            alt="Hero Background"
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
