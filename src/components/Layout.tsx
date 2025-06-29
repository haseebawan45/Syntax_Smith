import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary-600 text-3xl font-bold">
              <span className="text-primary-800">&lt;</span>
              Syntax
              <span className="text-secondary-600">Smith</span>
              <span className="text-primary-800">/&gt;</span>
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-primary-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`font-medium text-lg ${isActive('/') ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-700 hover:text-primary-600'} transition`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  className={`font-medium text-lg ${isActive('/courses') ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-700 hover:text-primary-600'} transition`}
                >
                  Courses
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col">
              <li>
                <Link 
                  to="/" 
                  className={`block py-3 px-4 ${isActive('/') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  className={`block py-3 px-4 ${isActive('/courses') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Courses
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <span className="text-white text-2xl font-bold">
                  <span className="text-primary-400">&lt;</span>
                  Syntax
                  <span className="text-secondary-400">Smith</span>
                  <span className="text-primary-400">/&gt;</span>
                </span>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                A comprehensive platform for learning programming languages from beginner to advanced levels with interactive lessons and challenges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-400 hover:text-white transition flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Courses
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
              <p className="text-gray-400 mb-4">
                Have questions? Reach out to us.
              </p>
              <div className="flex items-center text-gray-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@syntaxsmith.com
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} SyntaxSmith. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 