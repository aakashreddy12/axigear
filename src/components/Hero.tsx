import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/automotive.png"
          alt="Automotive Engineering Excellence"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-16 md:py-20 flex justify-start">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-left">
            Engineering Excellence in Automotive Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 text-left">
            AxiGear specializes in manufacturing high-quality automotive components including transmission systems, axles, steering components, and more.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link href="/products" className="btn-primary text-center">
              <span>Explore Products</span>
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 