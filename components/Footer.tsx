const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-6">
      <div className="container mx-auto text-center px-4">
        <p className="text-xs sm:text-sm">&copy; 2024 AkinTech. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
