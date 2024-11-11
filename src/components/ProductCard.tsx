import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  path: string;
}

export default function ProductCard({ title, price, description, image, path }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-amber-200">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-contain p-4" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-900">{title}</h3>
        <p className="text-amber-700 font-bold mt-2">{price}</p>
        <p className="mt-2 text-stone-600">{description}</p>
        <button 
          onClick={() => navigate(path)}
          className="mt-4 w-full bg-amber-700 text-white py-2 px-4 rounded-md hover:bg-amber-800 transition duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}