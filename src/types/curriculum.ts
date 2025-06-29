export interface CodeExample {
  code: string;
  explanation: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  content: string;
  codeExamples: CodeExample[];
  exercise: string;
  solution: string;
  quizzes: Quiz[];
}

export interface Module {
  id: string;
  title: string;
  summary: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  language: string;
  description: string;
  icon: string;
  modules: Module[];
} 