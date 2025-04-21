import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Advanced manufacturing of automotive components with precision and quality.',
      details: [
        'State-of-the-art manufacturing facilities',
        'Precision engineering and production',
        'Quality control at every stage',
        'High-volume production capabilities',
        'Custom manufacturing solutions',
      ],
    },
    {
      id: 'import-export',
      title: 'Import & Export',
      description: 'Global import and export services for automotive components across international markets.',
      details: [
        'International shipping and logistics',
        'Customs clearance assistance',
        'Global distribution network',
        'Competitive pricing',
        'Bulk order fulfillment',
      ],
    },
    {
      id: 'assembly',
      title: 'Assembly Services',
      description: 'Professional assembly of automotive components and systems.',
      details: [
        'Precision assembly of components',
        'System integration',
        'Quality testing of assembled units',
        'Customized assembly solutions',
        'Efficient production lines',
      ],
    },
    {
      id: 'design',
      title: 'Design & Development',
      description: 'Innovative design and development of automotive components and systems.',
      details: [
        'Engineering design services',
        'Prototype development',
        'Performance testing',
        'Continuous improvement',
        'Research and development',
      ],
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      description: 'Expert technical consulting for automotive manufacturing and component integration.',
      details: [
        'Technical specifications',
        'Performance optimization',
        'Compliance with industry standards',
        'Problem-solving',
        'Process improvement',
      ],
    },
    {
      id: 'aftermarket',
      title: 'Aftermarket Support',
      description: 'Comprehensive aftermarket support and services for automotive components.',
      details: [
        'Spare parts supply',
        'Warranty services',
        'Technical support',
        'Repair and maintenance',
        'Component upgrades',
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="container-custom py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore our comprehensive range of services designed to meet all your automotive component needs.
            </p>
          </div>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                        Key Features:
                      </h3>
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => (
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
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer tailored solutions to meet your specific requirements. Contact our team at info@axigear.com or call us at +91 88866 31234 to discuss your needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 