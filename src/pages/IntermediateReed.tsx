import React from 'react';
import ProductDetail from '../components/ProductDetail';

export default function IntermediateReed() {
  return (
    <ProductDetail
      title="Intermediate Bassoon Reed"
      price="$32.99"
      description="The Intermediate Bassoon Reed bridges the gap between student and professional models. Crafted with greater precision and higher-grade materials, this reed offers enhanced tonal qualities and improved response, perfect for advancing players ready to explore more nuanced musical expression."
      image="https://i0.wp.com/charlesmusic.com/wp-content/uploads/2018/04/rba490_b.jpg?fit=1200%2C1200&ssl=1"
      rating={4.7}
      features={[
        "Enhanced tonal flexibility",
        "Improved response in all registers",
        "Greater dynamic range",
        "Hand-finished for optimal performance",
        "Suitable for advanced repertoire",
        "Balanced resistance for developing embouchures"
      ]}
      specifications={{
        "Material": "Premium Gouged Cane",
        "Shape": "Semi-Professional Cut",
        "Wire": "Brass, Professional Gauge",
        "Strength": "Medium to Medium-Strong",
        "Breaking-in Period": "3-4 days",
        "Expected Lifespan": "2-4 months with proper care",
        "Suitable for": "Advancing Students and Amateur Players"
      }}
    />
  );
}