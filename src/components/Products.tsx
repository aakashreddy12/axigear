import Link from 'next/link';

export default function Products() {
  const products = [
    {
      id: 'transmission',
      title: 'Transmission Systems',
      description: 'Advanced transmission systems for commercial vehicles, motor cars, and specialized machinery.',
      features: ['Automatic Transmissions', 'Manual Transmissions', 'CVTs', 'Clutch Systems'],
    },
    {
      id: 'axles',
      title: 'Axles & Shafts',
      description: 'High-strength axles, universal joints, and drive shafts for automotive applications.',
      features: ['Drive Axles', 'Universal Joints', 'Differentials', 'Propeller Shafts'],
    },
    {
      id: 'steering',
      title: 'Steering Components',
      description: 'Precision steering systems and components for enhanced vehicle control and maneuverability.',
      features: ['Steering Racks', 'Power Steering Units', 'Steering Columns', 'Tie Rods'],
    },
    {
      id: 'engine',
      title: 'Engine Components',
      description: 'High-performance engine components and accessories for automotive applications.',
      features: ['Engine Mounts', 'Gaskets', 'Valves', 'Bearings'],
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality automotive components
            engineered for performance and durability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-card"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="mb-0">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                    Key Products:
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 