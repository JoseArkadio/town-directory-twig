
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/businesses';
import { 
  Utensils, ShoppingBag, Briefcase, Stethoscope, Scissors, 
  Car, Home, Music, Banknote, Layers
} from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch(category) {
    case 'Restaurants':
      return <Utensils className="w-6 h-6" />;
    case 'Retail':
      return <ShoppingBag className="w-6 h-6" />;
    case 'Professional Services':
      return <Briefcase className="w-6 h-6" />;
    case 'Healthcare':
      return <Stethoscope className="w-6 h-6" />;
    case 'Beauty & Wellness':
      return <Scissors className="w-6 h-6" />;
    case 'Automotive':
      return <Car className="w-6 h-6" />;
    case 'Home Services':
      return <Home className="w-6 h-6" />;
    case 'Entertainment':
      return <Music className="w-6 h-6" />;
    case 'Financial Services':
      return <Banknote className="w-6 h-6" />;
    default:
      return <Layers className="w-6 h-6" />;
  }
};

const CategorySection: React.FC = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Business Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link 
              key={category} 
              to={`/businesses?category=${encodeURIComponent(category)}`}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-primary mb-3">
                {getCategoryIcon(category)}
              </div>
              <span className="font-medium">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
