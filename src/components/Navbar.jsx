function Navbar({ className = "" }) {
  return (
    <nav
      className={`flex justify-between border-b border-gray-900 py-4 bg-black text-white text-lg ${className}`}
    >
      <div className="flex justify-around w-full mx-35">
        <div className="flex items-center">
          <img
            src="https://logowik.com/content/uploads/images/linear-app1721071870.logowik.com.webp"
            alt="linear logo"
            height={20}
            width={40}
          />
          <h1>Linear</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-5 text-sm text-gray-400">
            <li className="hover:rounded-sm hover:bg-gray-800 px-2 py-1 hover:cursor-pointer">
              Product
            </li>
            <li className="hover:rounded-sm hover:bg-gray-800 px-2 py-1 hover:cursor-pointer">
              Resources
            </li>
            <li className="hover:rounded-sm hover:bg-gray-800 px-2 py-1 hover:cursor-pointer">
              Pricing
            </li>
            <li className="hover:rounded-sm hover:bg-gray-800 px-2 py-1 hover:cursor-pointer">
              Customers
            </li>
            <li className="hover:rounded-sm hover:bg-gray-800 px-2 py-1 hover:cursor-pointer">
              Blog
            </li>
            <li className="hover:rounded-sm hover:bg-gray-800 px-2 py-1 hover:cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <button className="rounded-sm px-2 py-1 text-sm text-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer">
            Docs
          </button>
          <button className="rounded-xl px-3 py-2 bg-gray-200 text-black text-sm hover:bg-white hover:cursor-pointer">
            Open app
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
