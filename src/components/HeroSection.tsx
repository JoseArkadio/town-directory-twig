
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/businesses?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-blue-700/90 text-white">
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop')" 
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Local Businesses</h1>
          <p className="text-xl mb-8">Find and connect with the best businesses in your community</p>
          
          <form onSubmit={handleSearch} className="flex w-full max-w-xl mx-auto">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search for businesses..."
                className="w-full h-12 pl-10 text-gray-900 rounded-l-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            <Button 
              type="submit" 
              className="h-12 rounded-l-none"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
