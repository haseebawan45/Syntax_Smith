import React from 'react';
import { Link, useParams } from 'react-router-dom';
import curriculumData from '../data/curriculumData';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = curriculumData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <p className="mb-6">The course you are looking for does not exist.</p>
        <Link 
          to="/courses"
          className="inline-block bg-primary-600 text-white font-medium py-2 px-6 rounded-md hover:bg-primary-700 transition"
        >
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{course.language}</h1>
        <p className="text-xl text-gray-600">
          {course.description}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
        
        <div className="space-y-8">
          {course.modules.map((module) => (
            <div key={module.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">{module.title}</h3>
              <p className="text-gray-600 mb-4">{module.summary}</p>
              
              {module.lessons.length > 0 ? (
                <div>
                  <h4 className="text-lg font-semibold mb-3">Lessons:</h4>
                  <ul className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id} className="bg-gray-50 rounded-md p-4 hover:bg-gray-100 transition">
                        <Link 
                          to={`/courses/${courseId}/lessons/${lesson.id}`}
                          className="flex justify-between items-center"
                        >
                          <span className="font-medium">{lesson.title}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-500 italic">Lessons coming soon...</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseDetail; 