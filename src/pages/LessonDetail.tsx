import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import curriculumData from '../data/curriculumData';

interface ScoreResult {
  correct: number;
  total: number;
  percentage: number;
}

const LessonDetail: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'lesson' | 'quiz' | 'challenge'>('lesson');
  const [selectedQuizIndex, setSelectedQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Find the course, module and lesson
  const course = curriculumData.find((c) => c.id === courseId);
  const module = course?.modules.find((m) => m.lessons.some((l) => l.id === lessonId));
  const lesson = module?.lessons.find((l) => l.id === lessonId);

  // Handle navigation to previous/next lesson
  const handleNavigation = (direction: 'prev' | 'next') => {
    if (!course || !module) return;
    
    const currentLessonIndex = module.lessons.findIndex((l) => l.id === lessonId);
    if (currentLessonIndex === -1) return;
    
    if (direction === 'prev' && currentLessonIndex > 0) {
      navigate(`/courses/${courseId}/lessons/${module.lessons[currentLessonIndex - 1].id}`);
    } else if (direction === 'next' && currentLessonIndex < module.lessons.length - 1) {
      navigate(`/courses/${courseId}/lessons/${module.lessons[currentLessonIndex + 1].id}`);
    }
  };

  // Reset state when lesson changes
  useEffect(() => {
    setActiveTab('lesson');
    setSelectedQuizIndex(0);
    setUserAnswers({});
    setShowResults(false);
  }, [lessonId]);

  // Handle quiz answer selection
  const handleAnswerSelect = (quizId: string, answer: string) => {
    setUserAnswers({
      ...userAnswers,
      [quizId]: answer
    });
  };

  // Check if all questions have been answered
  const allQuestionsAnswered = () => {
    if (!lesson?.quizzes) return false;
    return lesson.quizzes.every(quiz => userAnswers[quiz.id]);
  };

  // Calculate quiz score
  const calculateScore = (): ScoreResult => {
    if (!lesson?.quizzes || lesson.quizzes.length === 0) {
      return {
        correct: 0,
        total: 0,
        percentage: 0
      };
    }
    
    const correctAnswers = lesson.quizzes.filter(
      quiz => userAnswers[quiz.id] === quiz.correctAnswer
    ).length;
    
    return {
      correct: correctAnswers,
      total: lesson.quizzes.length,
      percentage: Math.round((correctAnswers / lesson.quizzes.length) * 100)
    };
  };

  if (!course || !module || !lesson) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <p className="mb-6">The lesson you are looking for does not exist.</p>
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
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex text-sm text-gray-500">
          <li>
            <Link to="/courses" className="hover:text-primary-600 transition">Courses</Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to={`/courses/${courseId}`} className="hover:text-primary-600 transition">{course.language}</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="font-medium text-gray-900">{lesson.title}</li>
        </ol>
      </nav>

      {/* Lesson Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-gray-600">Module: {module.title}</p>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('lesson')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'lesson'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Lesson Content
          </button>
          {lesson.quizzes && lesson.quizzes.length > 0 && (
            <button
              onClick={() => setActiveTab('quiz')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'quiz'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Quiz
            </button>
          )}
          {lesson.challenge && (
            <button
              onClick={() => setActiveTab('challenge')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'challenge'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Challenge
            </button>
          )}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mb-12">
        {/* Lesson Content */}
        {activeTab === 'lesson' && (
          <div>
            <div 
              className="prose prose-blue max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
            
            <h3 className="text-xl font-bold mb-4">Code Examples</h3>
            <div className="space-y-6">
              {lesson.codeExamples.map((example, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-800 p-4">
                    <pre className="text-white overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-700">{example.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quiz */}
        {activeTab === 'quiz' && lesson.quizzes && (
          <div>
            {!showResults ? (
              <div>
                <h2 className="text-xl font-bold mb-6">Quiz: Test Your Knowledge</h2>
                <div className="space-y-8">
                  {lesson.quizzes.map((quiz, index) => (
                    <div key={quiz.id} className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-medium mb-4">Question {index + 1}: {quiz.question}</h3>
                      <div className="space-y-3">
                        {quiz.options.map((option) => (
                          <label 
                            key={option} 
                            className={`flex items-center p-3 rounded-md border cursor-pointer ${
                              userAnswers[quiz.id] === option 
                                ? 'bg-primary-50 border-primary-300' 
                                : 'bg-white border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name={quiz.id}
                              value={option}
                              checked={userAnswers[quiz.id] === option}
                              onChange={() => handleAnswerSelect(quiz.id, option)}
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-3">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setShowResults(true)}
                    disabled={!allQuestionsAnswered()}
                    className={`py-2 px-6 rounded-md font-medium ${
                      allQuestionsAnswered()
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Submit Answers
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-6">Quiz Results</h2>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Your Score</h3>
                    <div className="text-2xl font-bold">
                      {calculateScore().correct}/{calculateScore().total} ({calculateScore().percentage}%)
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div 
                      className="bg-primary-600 h-2.5 rounded-full" 
                      style={{ width: `${calculateScore().percentage}%` }}
                    ></div>
                  </div>
                  <div className="space-y-6">
                    {lesson.quizzes.map((quiz, index) => {
                      const isCorrect = userAnswers[quiz.id] === quiz.correctAnswer;
                      return (
                        <div 
                          key={quiz.id}
                          className={`p-4 rounded-md ${
                            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                          }`}
                        >
                          <div className="flex items-start">
                            <div className={`flex-shrink-0 h-5 w-5 rounded-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center mt-0.5`}>
                              {isCorrect ? (
                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )}
                            </div>
                            <div className="ml-3">
                              <h4 className="font-medium">Question {index + 1}: {quiz.question}</h4>
                              <p className="text-sm mt-1">
                                Your answer: <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>{userAnswers[quiz.id]}</span>
                              </p>
                              {!isCorrect && (
                                <p className="text-sm mt-1">
                                  Correct answer: <span className="text-green-700">{quiz.correctAnswer}</span>
                                </p>
                              )}
                              <p className="text-sm mt-2 text-gray-600">{quiz.explanation}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={() => {
                        setShowResults(false);
                        setUserAnswers({});
                      }}
                      className="bg-primary-600 text-white py-2 px-6 rounded-md font-medium hover:bg-primary-700"
                    >
                      Retry Quiz
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Challenge */}
        {activeTab === 'challenge' && lesson.challenge && (
          <div>
            <h2 className="text-xl font-bold mb-6">Coding Challenge: {lesson.challenge.title}</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-gray-700 mb-6">{lesson.challenge.description}</p>
                
                <h3 className="font-medium mb-2">Success Criteria</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  {lesson.challenge.successCriteria.map((criteria, index) => (
                    <li key={index}>{criteria}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800 p-4">
                <pre className="text-white overflow-x-auto">
                  <code>{lesson.challenge.starterCode}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lesson Navigation */}
      <div className="flex justify-between border-t border-gray-200 pt-6">
        <button
          onClick={() => handleNavigation('prev')}
          className="flex items-center text-gray-600 hover:text-primary-600 transition"
          disabled={module.lessons.findIndex((l) => l.id === lessonId) === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </button>
        <button
          onClick={() => handleNavigation('next')}
          className="flex items-center text-gray-600 hover:text-primary-600 transition"
          disabled={module.lessons.findIndex((l) => l.id === lessonId) === module.lessons.length - 1}
        >
          Next Lesson
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LessonDetail; 