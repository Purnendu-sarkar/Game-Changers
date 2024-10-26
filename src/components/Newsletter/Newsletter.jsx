

function Newsletter() {
  return (
    <div className="w-11/12 mx-auto absolute bottom-[800px] md:bottom-[520px] left-5 md:left-20">
        <div className="px-4 py-24 rounded-3xl text-center bg-gradient-to-r from-blue-200 via-white to-yellow-100 ring-4 ring-offset-4 ring-gray-200">
            <h3 className="font-bold text-3xl text-dark-02 mb-4">Subscribe to our Newsletter</h3>
            <p className="font-medium text-xl text-dark-01 mb-6">Get the latest updates and news right in your inbox!</p>
            <div className="flex items-center space-x-2 md:w-1/3 mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 border border-gray-300 rounded-lg outline-none focus:border-gray-400"
          />
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-pink-600 hover:to-yellow-600">
            Subscribe
          </button>
        </div>

        </div>
    </div>
  );
}

export default Newsletter;
