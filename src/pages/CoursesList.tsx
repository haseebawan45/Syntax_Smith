import React from 'react';
import { Link } from 'react-router-dom';
import curriculumData from '../data/curriculumData';

const CoursesList: React.FC = () => {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Programming Courses</h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore our comprehensive programming courses designed to take you from beginner to advanced levels.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {curriculumData.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{course.language}</h2>
              <p className="text-gray-600 mb-6">
                {course.description}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">What you'll learn:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {course.modules.map((module) => (
                    <li key={module.id}>{module.title}</li>
                  ))}
                </ul>
              </div>
              <Link 
                to={`/courses/${course.id}`}
                className="inline-block bg-primary-600 text-white font-medium py-2 px-6 rounded-md hover:bg-primary-700 transition"
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList; 