
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { businesses } from '../data/businesses';
import { Star, MapPin, Phone, Globe, Mail, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const BusinessDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const business = businesses.find(b => b.id === id);
  
  if (!business) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Business Not Found</h1>
          <p className="text-xl mb-8">Sorry, we couldn't find the business you're looking for.</p>
          <Button onClick={() => navigate('/businesses')}>Browse All Businesses</Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Header Section with Image */}
        <div className="relative h-64 md:h-80 bg-gray-300">
          <img 
            src={business.images.thumbnail} 
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <Button 
            variant="outline" 
            className="absolute top-4 left-4 bg-white/90" 
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
        </div>
        
        <div className="container mx-auto px-4 -mt-8">
          <div className="bg-white rounded-t-lg shadow-md p-6 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h1 className="text-3xl font-bold mb-2 md:mb-0">{business.name}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 fill-amber-500 stroke-amber-500 mr-1" />
                  <span className="font-semibold">{business.rating}</span>
                  <span className="text-sm text-amber-600 ml-1">({business.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm bg-secondary inline-block px-3 py-1 rounded-full mb-4">{business.category}</p>
            
            <p className="text-gray-700 mb-6">{business.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-gray-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-muted-foreground">
                    {business.address}<br />
                    {business.city}, {business.state} {business.zipCode}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-2 text-gray-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">{business.phone}</p>
                </div>
              </div>
              
              {business.website && (
                <div className="flex items-start">
                  <Globe className="w-5 h-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Website</h4>
                    <a 
                      href={business.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {business.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                </div>
              )}
              
              {business.email && (
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href={`mailto:${business.email}`} 
                      className="text-primary hover:underline"
                    >
                      {business.email}
                    </a>
                  </div>
                </div>
              )}
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-2 text-gray-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    {business.hours.Monday}<br />
                    <span className="text-xs text-gray-500">(See all hours below)</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {business.features.map((feature, index) => (
                <span 
                  key={index} 
                  className="text-sm bg-secondary text-secondary-foreground rounded-full px-3 py-1"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            <Tabs defaultValue="photos">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="hours">Hours</TabsTrigger>
                <TabsTrigger value="info">More Info</TabsTrigger>
              </TabsList>
              
              <TabsContent value="photos" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={business.images.thumbnail} 
                      alt={business.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {business.images.gallery.map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${business.name} ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="hours" className="mt-6">
                <div className="bg-secondary rounded-lg p-4">
                  {Object.entries(business.hours).map(([day, hours], index, array) => (
                    <div key={day}>
                      <div className="flex justify-between py-2">
                        <span className="font-medium">{day}</span>
                        <span>{hours}</span>
                      </div>
                      {index < array.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="info" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">About</h3>
                    <p>{business.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Features</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {business.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessDetailPage;
