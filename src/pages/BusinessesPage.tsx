
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BusinessCard from '../components/BusinessCard';
import { businesses, categories, Business } from '../data/businesses';
import { Check, ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const BusinessesPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [searchTerm, setSearchTerm] = useState(queryParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || '');
  const [sortBy, setSortBy] = useState('rating');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>(businesses);
  
  // Get all unique features across all businesses
  const allFeatures = Array.from(
    new Set(businesses.flatMap(business => business.features))
  ).sort();
  
  useEffect(() => {
    // Update URL with current filter state
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory) params.set('category', selectedCategory);
    
    const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    navigate(newUrl, { replace: true });
    
    let filtered = [...businesses];
    
    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        business => 
          business.name.toLowerCase().includes(search) ||
          business.description.toLowerCase().includes(search) ||
          business.category.toLowerCase().includes(search)
      );
    }
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(business => business.category === selectedCategory);
    }
    
    // Apply features filter
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter(business => 
        selectedFeatures.every(feature => business.features.includes(feature))
      );
    }
    
    // Apply sorting
    switch(sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'name_asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    
    setFilteredBusinesses(filtered);
  }, [searchTerm, selectedCategory, sortBy, selectedFeatures, location.pathname, navigate]);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  const toggleFeature = (feature: string) => {
    setSelectedFeatures(current => 
      current.includes(feature)
        ? current.filter(f => f !== feature)
        : [...current, feature]
    );
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSearch={handleSearch} />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {selectedCategory ? `${selectedCategory} Businesses` : 'All Businesses'}
            </h1>
            <p className="text-muted-foreground">
              {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'business' : 'businesses'} found
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Sort By</h3>
                <Select
                  value={sortBy}
                  onValueChange={setSortBy}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rating</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="name_asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name_desc">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Features</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {selectedFeatures.length > 0 ? `${selectedFeatures.length} selected` : 'Select Features'}
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="start">
                    {allFeatures.map(feature => (
                      <DropdownMenuCheckboxItem
                        key={feature}
                        checked={selectedFeatures.includes(feature)}
                        onCheckedChange={() => toggleFeature(feature)}
                      >
                        {feature}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              {/* Clear filters button */}
              {(selectedCategory || selectedFeatures.length > 0) && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedCategory('');
                    setSelectedFeatures([]);
                  }}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              )}
            </div>
            
            {/* Business Listings */}
            <div className="flex-grow">
              {filteredBusinesses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredBusinesses.map((business) => (
                    <BusinessCard key={business.id} business={business} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No businesses found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessesPage;
