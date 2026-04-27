import { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">أ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">أبو وجدي</h1>
              <p className="text-xs text-gray-500">الإلكترونيات والجمال</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">الرئيسية</a>
            <a href="#electronics" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">إلكترونيات</a>
            <a href="#beauty" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">جمال وعناية</a>
            <a href="#offers" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">العروض</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">تواصل معنا</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن منتجات..."
                className="w-full px-4 py-3 pr-12 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">الرئيسية</a>
              <a href="#electronics" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">إلكترونيات</a>
              <a href="#beauty" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">جمال وعناية</a>
              <a href="#offers" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">العروض</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">تواصل معنا</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;