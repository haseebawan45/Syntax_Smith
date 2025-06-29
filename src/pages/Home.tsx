import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-lg mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Master Programming with SyntaxSmith</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Comprehensive, structured learning paths from beginner to advanced for multiple programming languages
          </p>
          <Link 
            to="/courses" 
            className="inline-block bg-white text-primary-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition transform hover:scale-105"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['JavaScript', 'Python', 'Java'].map((language) => (
            <div key={language} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{language}</h3>
                <p className="text-gray-600 mb-4">
                  From basic syntax to advanced concepts, master {language} with our comprehensive curriculum.
                </p>
                <Link 
                  to={`/courses/${language.toLowerCase()}`}
                  className="text-primary-600 font-medium hover:text-primary-800 transition"
                >
                  View Course →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose SyntaxSmith?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Structured Learning</h3>
            <p className="text-gray-600">
              Carefully crafted curriculum that builds skills progressively from fundamentals to advanced topics.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
            <p className="text-gray-600">
              Practice what you learn with interactive code challenges and quizzes that reinforce concepts.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-World Projects</h3>
            <p className="text-gray-600">
              Apply your skills to practical projects that simulate real-world programming challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 