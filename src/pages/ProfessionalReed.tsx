import React from 'react';
import ProductDetail from '../components/ProductDetail';

export default function ProfessionalReed() {
  return (
    <ProductDetail
      title="Professional Bassoon Reed"
      price="$39.99"
      description="Our Professional Bassoon Reed represents the pinnacle of reed-making craftsmanship. Each reed is meticulously handcrafted from the finest selected cane and precisely finished to meet the demanding requirements of professional performers. These reeds offer exceptional response, rich tone, and superior flexibility across all registers."
      image="https://i0.wp.com/charlesmusic.com/wp-content/uploads/2018/04/rba100_b.jpg?fit=1200%2C1200&ssl=1"
      rating={4.9}
      features={[
        "Premium hand-selected cane",
        "Exceptional tonal complexity",
        "Superior response and flexibility",
        "Maximum dynamic range",
        "Professional-grade finishing",
        "Ideal for solo and orchestral performance",
        "Custom strength options available"
      ]}
      specifications={{
        "Material": "Elite Grade Gouged Cane",
        "Shape": "Professional Artist Cut",
        "Wire": "German Silver, Professional Gauge",
        "Strength": "Custom to Specification",
        "Breaking-in Period": "4-5 days",
        "Expected Lifespan": "3-5 months with proper care",
        "Suitable for": "Professional Players and Advanced Students"
      }}
    />
  );
}