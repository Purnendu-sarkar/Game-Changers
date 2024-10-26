import foote from '../../assets/logo-footer.png'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="w-11/12 mx-auto mt-48">
        
        <div className="flex flex-col items-center mb-5">
          <img src={foote} alt="Cricket Logo" className="h-16 mb-4" />
          <h2 className="text-xl font-semibold text-gray-100">Cricket</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 px-4">
        <div className="text-center md:text-left lg:flex-1">
          <h3 className="font-semibold text-lg text-white mb-3">About Us</h3>
          <p className="text-gray-400 md:w-1/2">We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        <div className="text-center lg:text-left lg:flex-1">
          <h3 className="font-semibold text-lg text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-xs hover:text-white">Home</a></li>
            <li><a href="#services" className="text-xs hover:text-white">Services</a></li>
            <li><a href="#about" className="text-xs hover:text-white">About</a></li>
            <li><a href="#contact" className="text-xs hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="text-center lg:text-left lg:flex-1">
          <h3 className="font-semibold text-lg text-white mb-3">Subscribe</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg border-none outline-none"
            />
            <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-4 py-2 rounded-r-lg shadow-md hover:from-pink-600 hover:to-yellow-600">
              Subscribe
            </button>
          </div>
        </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 py-4">
        <div className="container mx-auto text-center text-gray-500 mt-5">
          <p>&copy;2024 Purnendu All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
