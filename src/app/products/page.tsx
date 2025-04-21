import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ProductsPage() {
  const productCategories = [
    {
      id: 'transmission',
      title: 'Transmission Systems',
      description: 'Advanced transmission systems for commercial vehicles, motor cars, and specialized machinery.',
      products: [
        'Automatic Transmissions',
        'Manual Transmissions',
        'Continuous Variable Transmissions (CVTs)',
        'Dual Clutch Transmissions',
        'Transmission Control Modules',
        'Clutch Systems',
        'Transmission Oil Pumps',
        'Gearboxes and Gear Assemblies',
      ],
    },
    {
      id: 'axles',
      title: 'Axles & Shafts',
      description: 'High-strength axles, universal joints, and drive shafts for automotive applications.',
      products: [
        'Drive Axles',
        'Front Axles',
        'Rear Axles',
        'Independent Suspension Axles',
        'Rigid Axles',
        'Universal Joints',
        'CV Joints',
        'Propeller Shafts',
        'Half Shafts',
        'Differentials',
      ],
    },
    {
      id: 'steering',
      title: 'Steering Components',
      description: 'Precision steering systems and components for enhanced vehicle control and maneuverability.',
      products: [
        'Steering Racks',
        'Power Steering Units',
        'Hydraulic Steering Systems',
        'Electric Steering Systems',
        'Steering Columns',
        'Steering Wheels',
        'Tie Rods',
        'Steering Knuckles',
        'Steering Gears',
      ],
    },
    {
      id: 'engine',
      title: 'Engine Components',
      description: 'High-performance engine components and accessories for automotive applications.',
      products: [
        'Engine Mounts',
        'Gaskets and Seals',
        'Bearings',
        'Valves and Valve Assemblies',
        'Piston Rings',
        'Camshafts',
        'Crankshafts',
        'Connecting Rods',
        'Timing Belts and Chains',
      ],
    },
    {
      id: 'exhaust',
      title: 'Exhaust Systems',
      description: 'Complete exhaust systems and components for automotive applications.',
      products: [
        'Exhaust Manifolds',
        'Catalytic Converters',
        'Mufflers',
        'Exhaust Pipes',
        'Silencers',
        'Resonators',
        'Exhaust Brackets',
        'Exhaust Gaskets',
      ],
    },
    {
      id: 'accessories',
      title: 'Automotive Accessories',
      description: 'Various accessories and components for automotive applications.',
      products: [
        'Spring Leaves',
        'Head Lamps',
        'Sealed Beams',
        'Brake Linings',
        'Springs',
        'Alloy Springs',
        'Steel Components',
        'Automotive Fasteners',
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
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore our comprehensive range of high-quality automotive components designed for performance, durability, and reliability.
            </p>
          </div>
        </div>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2">
              {productCategories.map((category) => (
                <div 
                  key={category.id}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover-card p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                      Products:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {category.products.map((product, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 