import React from 'react';
import { ArrowLeft, Star, Shield, Truck } from 'lucide-react';

interface ProductDetailProps {
  title: string;
  price: string;
  description: string;
  image: string;
  features: string[];
  specifications: { [key: string]: string };
  rating: number;
}

export default function ProductDetail({
  title,
  price,
  description,
  image,
  features,
  specifications,
  rating,
}: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-stone-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <a
          href="/"
          className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </a>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-amber-50 rounded-lg p-8">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-900">Specifications</h3>
                <dl className="grid grid-cols-1 gap-4">
                  {Object.entries(specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-amber-100 pb-2">
                      <dt className="text-sm text-stone-600">{key}</dt>
                      <dd className="text-stone-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-amber-900">{title}</h1>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < rating ? 'text-amber-500 fill-amber-500' : 'text-stone-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-stone-600">
                    ({rating.toFixed(1)} / 5.0)
                  </span>
                </div>
                <p className="text-2xl font-bold text-amber-700 mt-4">{price}</p>
              </div>

              <p className="text-stone-600">{description}</p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-900">Key Features</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-700 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-amber-700 text-white py-3 px-4 rounded-md hover:bg-amber-800 transition duration-300">
                  Add to Cart
                </button>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center text-stone-600">
                    <Truck className="h-5 w-5 mr-2 text-amber-700" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center text-stone-600">
                    <Shield className="h-5 w-5 mr-2 text-amber-700" />
                    <span className="text-sm">30-Day Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}