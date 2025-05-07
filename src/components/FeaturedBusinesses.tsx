
import React from 'react';
import { Business } from '../data/businesses';
import BusinessCard from './BusinessCard';
import { cn } from '../lib/utils';

interface FeaturedBusinessesProps {
  businesses: Business[];
  title?: string;
  className?: string;
}

const FeaturedBusinesses: React.FC<FeaturedBusinessesProps> = ({ 
  businesses, 
  title = "Featured Businesses", 
  className 
}) => {
  return (
    <section className={cn("py-12", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
