import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPage() {
  const partnerships = [
    {
      id: 'bajaj',
      name: 'BAJAJ',
      role: 'Authorized Dealership',
      entity: 'AVR Motors',
      location: 'Bhimavaram, West Godavari District',
      description: 'Exclusive dealership for BAJAJ automotive products and services.',
      details: [
        'Full-service dealership for BAJAJ vehicles',
        'Authorized service center',
        'Genuine spare parts distribution',
        'Customer support and warranty services',
        'Sales of new BAJAJ vehicles'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="relative min-h-[400px] md:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg.jpeg"
              alt="Portfolio Background"
              fill
              priority
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center 40%'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="container-custom py-16 md:py-24">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-left">
                  Our Portfolio
                </h1>
                <p className="text-lg text-gray-200 max-w-xl text-left">
                  Explore our partnerships and dealerships that strengthen our position in the automotive industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Partnerships & Dealerships
              </h2>
              <p className="text-lg text-gray-600">
                At AxiGear, we take pride in our strategic partnerships and authorized dealerships that enable us to deliver 
                exceptional products and services to our customers. Our network of partnerships extends our reach and enhances our 
                capabilities in the automotive sector.
              </p>
            </div>

            <div className="space-y-12">
              {partnerships.map((partner) => (
                <div 
                  key={partner.id}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6 md:p-8 hover-card"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      {partner.id === 'bajaj' ? (
                        <div className="aspect-square bg-white rounded-lg shadow-sm flex flex-col items-center justify-center p-4 img-hover-zoom">
                          <div className="mb-4">
                            <Image
                              src="/bajaj-logo.png"
                              alt="Bajaj Logo"
                              width={220}
                              height={80}
                              priority
                              className="mb-6"
                            />
                          </div>
                          <div className="mb-2">
                            <Image
                              src="/avr-logo.png"
                              alt="AVR Motors Logo"
                              width={180}
                              height={60}
                              priority
                            />
                          </div>
                          <p className="text-sm text-gray-600 text-center mt-4">
                            Official Partnership
                          </p>
                        </div>
                      ) : (
                        <div className="aspect-square bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                          <h3 className="text-3xl font-bold text-blue-600 text-center">
                            {partner.name}
                          </h3>
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <div className="mb-4">
                        <p className="text-sm text-blue-600 font-semibold uppercase">
                          {partner.role}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">
                          {partner.entity}
                        </h3>
                        <p className="text-lg text-gray-600 mt-1">
                          {partner.location}
                        </p>
                      </div>
                      
                      <p className="text-gray-700 mb-4">
                        {partner.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                          Services Offered:
                        </h4>
                        <ul className="grid grid-cols-1 gap-y-2">
                          {partner.details.map((detail, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Interested in Partnering with Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're always looking for new partnership opportunities. Contact us to discuss potential collaborations at axigearauto@gmail.com
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Our Dealership Network
              </h2>
              <p className="text-lg text-gray-600 text-center mb-10">
                Our established dealership network ensures we provide exceptional service and support across different regions.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                  <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      AVR Motors - BAJAJ Authorized Dealership
                    </h3>
                    <p className="text-gray-600">Premier dealership in West Godavari District</p>
                    <p className="text-gray-600 mt-1 font-medium">GSTIN: 37ACIFA2431M1ZB</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="img-hover-zoom">
                      <Image
                        src="/avr-logo.png"
                        alt="AVR Motors Logo"
                        width={120}
                        height={40}
                        className="mr-4"
                      />
                    </div>
                    <div className="img-hover-zoom">
                      <Image
                        src="/bajaj-logo.png"
                        alt="Bajaj Logo"
                        width={150}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase mb-1">
                          Location
                        </h4>
                        <p className="text-gray-600">
                          Undi Road, Bhimavaram<br />
                          West Godavari District<br />
                          Andhra Pradesh, India
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase mb-1">
                          Contact
                        </h4>
                        <p className="text-gray-600">
                          Phone: +91 88866 31234 <br />
                          Email: axigearauto@gmail.com
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase mb-1">
                          Business Hours
                        </h4>
                        <p className="text-gray-600">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                      Dealership Highlights
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Established in 2024 as a premier BAJAJ dealership
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Award-winning customer service
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        State-of-the-art service facility
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Expert technicians trained by BAJAJ
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Serving the West Godavari region with excellence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 