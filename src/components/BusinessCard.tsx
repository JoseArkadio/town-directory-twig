
import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Business } from '../data/businesses';
import { cn } from '../lib/utils';

interface BusinessCardProps {
  business: Business;
  className?: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, className }) => {
  return (
    <Link 
      to={`/business/${business.id}`}
      className={cn(
        "block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-border",
        className
      )}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={business.images.thumbnail} 
          alt={business.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{business.name}</h3>
          <span className="flex items-center text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{business.rating}</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-1 mb-2">{business.category}</p>
        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{business.address}, {business.city}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Phone className="w-3 h-3 mr-1 flex-shrink-0" />
          <span>{business.phone}</span>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-1">
          {business.features.slice(0, 3).map((feature, index) => (
            <span 
              key={index} 
              className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-0.5"
            >
              {feature}
            </span>
          ))}
          {business.features.length > 3 && (
            <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-0.5">
              +{business.features.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;
