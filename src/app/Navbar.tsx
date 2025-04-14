'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-3 bg-gray-100 flex gap-4">
      <Link href="/" className="hover:underline text-blue-600">
        Home
      </Link>
      <Link href="/films" className="hover:underline text-blue-600">
        Películas
      </Link>
    </nav>
  );
};

export default Navbar;
