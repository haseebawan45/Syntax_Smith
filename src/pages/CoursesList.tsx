import React from 'react';
import { Link } from 'react-router-dom';
import curriculumData from '../data/curriculumData';

const CoursesList: React.FC = () => {
  // Language icons mapping
  const languageIcons: Record<string, string> = {
    'JavaScript': '⚡',
    'Python': '🐍',
    'Java': '☕',
  };

  // Language color mapping
  const languageColors: Record<string, string> = {
    'JavaScript': 'from-yellow-400 to-yellow-600',
    'Python': 'from-blue-400 to-blue-600',
    'Java': 'from-red-400 to-red-600',
  };

  return (
    <div>
      {/* Header Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 md:p-12 shadow-lg text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Programming Courses</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Explore our comprehensive programming courses designed to take you from beginner to advanced levels.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">{curriculumData.length}</span> courses available
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Filter by:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {curriculumData.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100 flex flex-col">
            <div className={`h-3 bg-gradient-to-r ${languageColors[course.language] || 'from-primary-500 to-secondary-500'}`}></div>
            <div className="p-6 flex-grow">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{languageIcons[course.language] || '📚'}</span>
                <h2 className="text-2xl font-bold">{course.language}</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Learning Path:
                </h3>
                <ul className="space-y-2">
                  {course.modules.map((module) => (
                    <li key={module.id} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{module.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="px-6 pb-6 mt-auto">
              <div className="flex items-center justify-between">
                <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {course.modules.length} Modules
                </span>
                <Link 
                  to={`/courses/${course.id}`}
                  className="inline-flex items-center bg-primary-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-primary-700 transition"
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

      {/* CTA Section */}
      <section className="bg-gray-100 rounded-xl p-8 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Don't see what you're looking for?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're constantly adding new courses and updating our curriculum. Check back soon or contact us with your suggestions.
        </p>
        <button className="bg-primary-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-primary-700 transition">
          Request a Course
        </button>
      </section>
    </div>
  );
};

export default CoursesList; 