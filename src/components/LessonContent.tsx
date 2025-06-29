import type { Lesson } from '../types/curriculum';
import CodeBlock from './CodeBlock';

interface LessonContentProps {
  lesson: Lesson;
}

export default function LessonContent({ lesson }: LessonContentProps) {
  // Helper function to determine code language based on lesson ID
  const getLanguage = (lessonId: string): string => {
    if (lessonId.startsWith('js-')) return 'javascript';
    if (lessonId.startsWith('py-')) return 'python';
    if (lessonId.startsWith('java-')) return 'java';
    return 'javascript'; // default
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Lesson title */}
      <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>
      
      {/* Duration */}
      <div className="text-gray-600 mb-6">
        Duration: {lesson.duration} minutes
      </div>

      {/* Main content */}
      <div 
        className="prose prose-lg max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: lesson.content }}
      />

      {/* Code examples */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>
        {lesson.codeExamples.map((example, index) => (
          <div key={index} className="space-y-4">
            <CodeBlock 
              code={example.code}
              language={getLanguage(lesson.id)}
            />
            <p className="text-gray-600 italic">{example.explanation}</p>
          </div>
        ))}
      </div>

      {/* Practice exercise */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Practice Exercise</h2>
        <p className="mb-6">{lesson.exercise}</p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Solution</h3>
          <CodeBlock 
            code={lesson.solution}
            language={getLanguage(lesson.id)}
          />
        </div>
      </div>

      {/* Quizzes */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Knowledge Check</h2>
        {lesson.quizzes.map((quiz) => (
          <div key={quiz.id} className="mb-8 p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-medium mb-4">{quiz.question}</h3>
            <ul className="space-y-3">
              {quiz.options.map((option, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name={quiz.id}
                    id={`${quiz.id}-${index}`}
                    className="h-4 w-4 text-blue-600"
                  />
                  <label htmlFor={`${quiz.id}-${index}`} className="text-gray-700">
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 