
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { categories, businesses } from '../data/businesses';
import { Link } from 'react-router-dom';
import { 
  Utensils, ShoppingBag, Briefcase, Stethoscope, Scissors, 
  Car, Home, Music, Banknote, Layers 
} from 'lucide-react';

const CategoriesPage: React.FC = () => {
  // Get counts for each category
  const categoryCounts = categories.reduce((acc, category) => {
    const count = businesses.filter(business => business.category === category).length;
    return { ...acc, [category]: count };
  }, {} as Record<string, number>);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Restaurants':
        return <Utensils className="w-8 h-8" />;
      case 'Retail':
        return <ShoppingBag className="w-8 h-8" />;
      case 'Professional Services':
        return <Briefcase className="w-8 h-8" />;
      case 'Healthcare':
        return <Stethoscope className="w-8 h-8" />;
      case 'Beauty & Wellness':
        return <Scissors className="w-8 h-8" />;
      case 'Automotive':
        return <Car className="w-8 h-8" />;
      case 'Home Services':
        return <Home className="w-8 h-8" />;
      case 'Entertainment':
        return <Music className="w-8 h-8" />;
      case 'Financial Services':
        return <Banknote className="w-8 h-8" />;
      default:
        return <Layers className="w-8 h-8" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-2">Business Categories</h1>
          <p className="text-muted-foreground mb-8">Browse businesses by category</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/businesses?category=${encodeURIComponent(category)}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-border"
              >
                <div className="p-6 flex items-center">
                  <div className="mr-4 text-primary">
                    {getCategoryIcon(category)}
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl mb-1">{category}</h2>
                    <p className="text-muted-foreground">
                      {categoryCounts[category]} {categoryCounts[category] === 1 ? 'business' : 'businesses'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;
