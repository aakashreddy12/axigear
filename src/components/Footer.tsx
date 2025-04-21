import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/axigear-logo.svg"
                alt="AxiGear Logo"
                width={250}
                height={75}
                priority
                className="img-hover-zoom"
              />
            </div>
            <p className="text-gray-600">
              Leading manufacturer and exporter of automotive components and systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/transmission" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Transmission Systems
                </Link>
              </li>
              <li>
                <Link href="/products/axles" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Axles and Shafts
                </Link>
              </li>
              <li>
                <Link href="/products/steering" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Steering Systems
                </Link>
              </li>
              <li>
                <Link href="/products/engine" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Engine Components
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Contact</h3>
            <address className="not-italic text-gray-600">
              <p>Undi Road, Bhimavaram</p>
              <p>West Godavari District</p>
              <p>Andhra Pradesh, India</p>
              <p className="mt-2">
                <a href="mailto:axigearauto@gmail.com" className="hover:text-blue-600 transition-colors duration-300">
                  axigearauto@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+918886631234" className="hover:text-blue-600 transition-colors duration-300">
                  +91 88866 31234
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AxiGear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 