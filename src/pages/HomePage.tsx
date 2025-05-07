
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturedBusinesses from '../components/FeaturedBusinesses';
import CategorySection from '../components/CategorySection';
import { businesses } from '../data/businesses';

const HomePage: React.FC = () => {
  const featuredBusinesses = businesses.filter(business => business.isFeatured);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showSearch={false} />
      <HeroSection />
      
      <FeaturedBusinesses businesses={featuredBusinesses} />
      
      <CategorySection />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a Business Owner?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our directory to increase your visibility and connect with more customers in your area.
          </p>
          <div className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
            Add Your Business
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
