import React from 'react';
import { ChevronDown, Leaf, Shield, Wrench, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-100 via-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight classic-text classic-glow">
                Handcrafted Bassoon Reeds for Perfect Performance
              </h1>
              <p className="text-xl text-amber-900">
                Experience the difference of custom-made bassoon reeds, crafted with precision and passion.
              </p>
              <div className="flex space-x-4">
                <button className="bg-amber-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-800 transition duration-300">
                  Shop Now
                </button>
                <button className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-md font-semibold hover:bg-amber-700 hover:text-white transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img 
                src="https://i.imgur.com/w8ewWdG.jpeg"
                alt="Crafting a reed"
                className="rounded-lg shadow-xl object-cover w-full h-[500px]"
              />
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <ChevronDown className="h-8 w-8 animate-bounce text-amber-700" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold classic-text">Why Choose Our Reeds?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700">
                <Leaf className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Premium Materials</h3>
              <p className="text-stone-600">Only the finest cane, carefully selected and aged to perfection.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700">
                <Wrench className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Expert Craftsmanship</h3>
              <p className="text-stone-600">Each reed is handcrafted by master artisans with decades of experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700">
                <Award className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Performance Guaranteed</h3>
              <p className="text-stone-600">Tested and adjusted for optimal response and tone quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 classic-text">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Student Bassoon Reed"
              price="$24.99"
              description="Perfect for beginners, offering durability and ease of response."
              image="https://i0.wp.com/charlesmusic.com/wp-content/uploads/2018/04/rba500_b.jpg?fit=1200%2C1200&ssl=1"
              path="/student-reed"
            />
            <ProductCard
              title="Intermediate Bassoon Reed"
              price="$32.99"
              description="Balanced response and rich tone for advancing players."
              image="https://i0.wp.com/charlesmusic.com/wp-content/uploads/2018/04/rba490_b.jpg?fit=1200%2C1200&ssl=1"
              path="/intermediate-reed"
            />
            <ProductCard
              title="Professional Bassoon Reed"
              price="$39.99"
              description="Premium handcrafted reed for superior tone and response."
              image="https://i0.wp.com/charlesmusic.com/wp-content/uploads/2018/04/rba100_b.jpg?fit=1200%2C1200&ssl=1"
              path="/professional-reed"
            />
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* ... */}
    </div>
  );
}

export default Home;