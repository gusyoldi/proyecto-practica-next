'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-background border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors font-semibold"
          >
            Home
          </Link>
          <Link
            href="/films"
            className="text-foreground hover:text-primary transition-colors font-semibold"
          >
            Películas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
