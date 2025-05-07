
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onSearch?: (term: string) => void;
  showSearch?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, showSearch = true }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      navigate(`/businesses?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            Local Business Directory
          </Link>
          
          {showSearch && (
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 relative">
              <Input
                type="text"
                placeholder="Search businesses..."
                className="w-full pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
          )}
          
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/businesses" className="text-gray-700 hover:text-primary transition-colors">
              Businesses
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-primary transition-colors">
              Categories
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
