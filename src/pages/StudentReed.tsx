import React from 'react';
import ProductDetail from '../components/ProductDetail';

export default function StudentReed() {
  return (
    <ProductDetail
      title="Student Bassoon Reed"
      price="$24.99"
      description="Our Student Bassoon Reed is specifically designed for beginners, offering excellent playability and durability. Each reed is carefully crafted to provide consistent response and clear articulation, making it ideal for developing proper embouchure and technique."
      image="https://i0.wp.com/charlesmusic.com/wp-content/uploads/2018/04/rba500_b.jpg?fit=1200%2C1200&ssl=1"
      rating={4.5}
      features={[
        "Easy response for developing players",
        "Durable construction for extended practice sessions",
        "Balanced tone across all registers",
        "Consistent quality control",
        "Perfect for school band programs",
        "Ideal for first-year to third-year students"
      ]}
      specifications={{
        "Material": "Selected Gouged Cane",
        "Shape": "Traditional Student Cut",
        "Wire": "Brass, Medium Gauge",
        "Strength": "Medium-Light to Medium",
        "Breaking-in Period": "2-3 days",
        "Expected Lifespan": "2-3 months with proper care",
        "Suitable for": "Beginning Students"
      }}
    />
  );
}