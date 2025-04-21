import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="container-custom py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About AxiGear
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Leading manufacturer and exporter of automotive components with a focus on transmission systems, axles, and more.
            </p>
          </div>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
              
              <div className="prose max-w-none">
                <p className="mb-6">
                  AxiGear is a leading manufacturer, assembler, and trader of automotive components specializing in transmission systems, 
                  axles, steering components, and various vehicle parts. With a commitment to excellence and innovation, we have established 
                  ourselves as a trusted supplier to the automotive industry.
                </p>
                
                <p className="mb-6">
                  Our business operations cover a wide range of activities including manufacturing, importing, exporting, 
                  and trading of automotive components for various vehicles including commercial vehicles, motor cars, motorcycles, 
                  scooters, buses, trucks, tractors, and more.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Our Scope of Business</h3>
                
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Manufacturing and Assembly:</strong> We specialize in manufacturing and assembling a wide range of automotive components, 
                    including transmission systems, axles, steering components, and more. Our state-of-the-art facilities and skilled workforce 
                    ensure high-quality products that meet international standards.
                  </li>
                  
                  <li>
                    <strong>Import and Export:</strong> AxiGear has established a strong presence in the global market through our import and 
                    export operations. We source high-quality components from trusted suppliers worldwide and export our products to various 
                    countries.
                  </li>
                  
                  <li>
                    <strong>Trading and Distribution:</strong> As traders and distributors of automotive components, we offer a comprehensive range 
                    of products to meet the diverse needs of our customers. Our extensive network enables us to supply components 
                    efficiently and reliably.
                  </li>
                  
                  <li>
                    <strong>Repair and Maintenance:</strong> We provide repair and maintenance services for various automotive components, ensuring 
                    optimal performance and longevity of vehicles.
                  </li>
                </ol>

                <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Our Vision</h3>
                
                <p className="mb-6">
                  Our vision is to be a global leader in the automotive components industry, known for our innovation, quality, 
                  and commitment to customer satisfaction. We aim to contribute to the advancement of the automotive industry by 
                  providing high-performance, reliable, and sustainable solutions.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Our Mission</h3>
                
                <p className="mb-6">
                  Our mission is to deliver excellence in every aspect of our business, from product design and manufacturing to 
                  customer service and support. We are committed to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the highest standards of quality and reliability</li>
                  <li>Embracing innovation and continuous improvement</li>
                  <li>Building lasting relationships with our customers and partners</li>
                  <li>Operating with integrity and ethical business practices</li>
                  <li>Contributing to sustainable development and environmental conservation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 