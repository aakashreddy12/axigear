import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="container-custom py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Get in touch with our team for inquiries about our products, services, or any other information.
            </p>
          </div>
        </div>

        <Contact />

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What types of products does AxiGear manufacture?
                  </h3>
                  <p className="text-gray-600">
                    AxiGear manufactures a wide range of automotive components including transmission systems, axles, steering components, 
                    engine parts, exhaust systems, and various automotive accessories.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you offer custom manufacturing services?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer custom manufacturing services tailored to meet specific requirements of our clients. 
                    Please contact our team to discuss your custom manufacturing needs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What quality standards do your products meet?
                  </h3>
                  <p className="text-gray-600">
                    All our products meet international quality standards and undergo rigorous quality control tests to ensure 
                    optimal performance, durability, and reliability.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you ship internationally?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we ship our products internationally. We have established a global distribution network to serve 
                    customers worldwide efficiently.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How can I become a distributor for AxiGear products?
                  </h3>
                  <p className="text-gray-600">
                    If you're interested in becoming a distributor for AxiGear products, please contact our business development 
                    team through the contact form or via email at axigearauto@gmail.com.
                  </p>
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