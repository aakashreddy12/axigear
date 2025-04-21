'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <span className="flex items-center">
              <Image
                src="/axigear-logo.svg"
                alt="AxiGear Logo"
                width={280}
                height={84}
                priority
              />
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="font-medium text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/products" className="font-medium text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link href="/portfolio" className="font-medium text-gray-700 hover:text-blue-600">
            Portfolio
          </Link>
          <Link href="/services" className="font-medium text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden shadow-lg">
          <div className="container-custom py-3 space-y-2">
            <Link
              href="/"
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/portfolio"
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 