'use client';
import Link from 'next/link';
import { HiSearch } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className="w-full px-4 md:px-8 py-4 bg-white shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
      <img src="/TopLogo.svg" alt="App Logo" className="h-10 w-auto"/>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-15 text-gray-700 font-medium ml-[500]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Company</Link>
        </li>
        <li>
          <Link href="/features">Resources</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
        <li>
          <Link href="/contact">Advertise</Link>
        </li>
      </ul>

      {/* Search bar */}
      <div className="relative w-40 md:w-64 flex rounded-md border bg-gray-300">
        <HiSearch className='text-white w-8 h-10 ml-4'/>
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
};

export default Navbar;
