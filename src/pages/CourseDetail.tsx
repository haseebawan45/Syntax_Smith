import React from 'react';
import { Link, useParams } from 'react-router-dom';
import curriculumData from '../data/curriculumData';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = curriculumData.find((c) => c.id === courseId);

  // Language icons mapping
  const languageIcons: Record<string, string> = {
    'JavaScript': '⚡',
    'Python': '🐍',
    'Java': '☕',
  };

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-12">
        <div className="bg-red-50 text-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Course not found</h2>
        <p className="text-gray-600 mb-8 max-w-md">The course you are looking for does not exist or might have been moved.</p>
        <Link 
          to="/courses"
          className="inline-flex items-center bg-primary-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-primary-700 transition transform hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/courses" className="hover:text-primary-600 transition">Courses</Link>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="font-medium text-gray-900">{course.language}</li>
        </ol>
      </nav>

      {/* Course Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 md:p-12 mb-12 text-white">
        <div className="flex items-center mb-6">
          <span className="text-5xl mr-4">{languageIcons[course.language] || '📚'}</span>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.language}</h1>
            <p className="text-xl text-gray-100 max-w-3xl">
              {course.description}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="bg-white/20 px-4 py-2 rounded-full">
            {course.modules.length} Modules
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-full">
            {course.modules.reduce((acc, module) => acc + module.lessons.length, 0)} Lessons
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">Course Modules</h2>
        
        <div className="space-y-6">
          {course.modules.map((module, index) => (
            <div key={module.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{module.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{module.summary}</p>
                
                {module.lessons.length > 0 ? (
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      Lessons
                    </h4>
                    <div className="grid gap-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <Link 
                          key={lesson.id}
                          to={`/courses/${courseId}/lessons/${lesson.id}`}
                          className="group bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <div className="bg-white text-gray-500 group-hover:text-primary-600 w-8 h-8 rounded-full flex items-center justify-center font-medium mr-4 shadow-sm">
                              {lessonIndex + 1}
                            </div>
                            <span className="font-medium group-hover:text-primary-600 transition">{lesson.title}</span>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-gray-500">Lessons coming soon...</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Begin your journey with the first module and track your progress as you advance through the course.
        </p>
        {course.modules[0]?.lessons[0] && (
          <Link 
            to={`/courses/${courseId}/lessons/${course.modules[0].lessons[0].id}`}
            className="inline-flex items-center bg-primary-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-primary-700 transition transform hover:-translate-y-1"
          >
            Start First Lesson
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </section>
    </div>
  );
};

export default CourseDetail; 