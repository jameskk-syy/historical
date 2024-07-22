import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              
                <Image
                  src="/path/to/your/profile-icon.png" // Replace with your image path
                  alt="Profile Icon"
                  width={40}
                  height={40}
                  className="cursor-pointer md:order-last md:ml-auto"
                />
          
            </Link>
          </div>
          <div className="flex items-center justify-center flex-1">
            <span className="text-xl font-bold text-gray-900">Farm Fuxion</span>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-900 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <Link href="/profile" className=" px-4 py-2 text-gray-900 hover:bg-gray-100 flex items-center">
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19.364A8.007 8.007 0 0012 21a8.007 8.007 0 006.879-1.636M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Profile
          </Link>
          <Link href="/logout" className=" px-4 py-2 text-gray-900 hover:bg-gray-100 flex items-center">
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3h-1a3 3 0 01-3-3v-1m0-8v-1a3 3 0 013-3h1a3 3 0 013 3v1" />
              </svg>
              Logout
           
          </Link>
        </div>
      )}
      <div className={`md:flex ${menuOpen ? "block" : "hidden"} md:items-center md:space-x-4 md:mt-0`}>
        <Link href="/profile" className=" md:flex px-4 py-2 text-gray-900 hover:bg-gray-100 flex items-center">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19.364A8.007 8.007 0 0012 21a8.007 8.007 0 006.879-1.636M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Profile
        </Link>
        <Link href="/logout" className=" md:flex px-4 py-2 text-gray-900 hover:bg-gray-100 flex items-center">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3h-1a3 3 0 01-3-3v-1m0-8v-1a3 3 0 013-3h1a3 3 0 013 3v1" />
            </svg>
            Logout
        </Link>
      </div>
    </nav>
  );
}
