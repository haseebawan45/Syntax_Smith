import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 -mt-8 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white rounded-xl mb-16 shadow-xl">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master Programming with <span className="text-secondary-300">SyntaxSmith</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Comprehensive, structured learning paths from beginner to advanced for multiple programming languages
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/courses" 
                className="inline-block bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                Explore Courses
              </Link>
              <a 
                href="#features" 
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-700 transition transform hover:-translate-y-1 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
              <div className="bg-gray-900/80 rounded-lg p-4 font-mono text-sm text-green-400">
                <div className="flex mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="mb-2"><span className="text-blue-400">function</span> <span className="text-yellow-400">learnToCode</span>() {`{`}</p>
                <p className="pl-4 mb-2"><span className="text-purple-400">const</span> skills = [];</p>
                <p className="pl-4 mb-2"><span className="text-purple-400">const</span> dedication = <span className="text-orange-400">true</span>;</p>
                <p className="pl-4 mb-2"><span className="text-blue-400">if</span> (dedication) {`{`}</p>
                <p className="pl-8 mb-2">skills.push(<span className="text-green-400">"JavaScript"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"Java"</span>);</p>
                <p className="pl-8 mb-2"><span className="text-blue-400">return</span> <span className="text-green-400">"Success!"</span>;</p>
                <p className="pl-4 mb-2">{`}`}</p>
                <p className="mb-2">{`}`}</p>
                <p><span className="text-yellow-400">learnToCode</span>();  <span className="text-gray-500">// "Success!"</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Languages Section */}
      <section className="mb-20" id="features">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Languages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your programming journey with our most popular courses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'JavaScript',
              icon: '⚡',
              color: 'yellow',
              description: 'From basic syntax to advanced concepts, master JavaScript for web development, server-side programming, and more.'
            },
            {
              name: 'Python',
              icon: '🐍',
              color: 'blue',
              description: 'Learn Python for data science, web development, automation, and more with our comprehensive curriculum.'
            },
            {
              name: 'Java',
              icon: '☕',
              color: 'red',
              description: 'Master Java programming from core concepts to enterprise applications, including OOP and modern Java features.'
            }
          ].map((language) => (
            <div key={language.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100">
              <div className="p-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{language.icon}</span>
                  <h3 className="text-2xl font-bold">{language.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Multiple modules</span>
                  <Link 
                    to={`/courses/${language.name.toLowerCase()}`}
                    className="text-primary-600 font-medium hover:text-primary-800 transition flex items-center"
                  >
                    View Course
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-20 py-16 bg-gray-100 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SyntaxSmith?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to make learning programming enjoyable and effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Structured Learning</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Carefully crafted curriculum that builds skills progressively from fundamentals to advanced topics.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-secondary-100 text-secondary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Interactive Learning</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Practice what you learn with interactive code challenges and quizzes that reinforce concepts.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Real-World Projects</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Apply your skills to practical projects that simulate real-world programming challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-12 bg-gradient-to-r from-secondary-600 to-secondary-800 text-white rounded-xl p-8 md:p-12 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already mastering programming with SyntaxSmith
          </p>
          <Link 
            to="/courses" 
            className="inline-block bg-white text-secondary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            Browse All Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 