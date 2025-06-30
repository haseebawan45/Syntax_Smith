import { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/themes/prism-tomorrow.css';

const languageOptions = [
  { value: 'javascript', label: 'JavaScript', icon: '⚡' },
  { value: 'python', label: 'Python', icon: '🐍' },
  { value: 'java', label: 'Java', icon: '☕' },
];

const defaultCode = {
  javascript: `// Write your JavaScript code here
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`,
  python: `# Write your Python code here
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`,
  java: `// Write your Java code here
public class Main {
    public static void main(String[] args) {
        System.out.println(greet("World"));
    }
    
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}`
};

const Playground: React.FC = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(defaultCode.javascript);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLPreElement>(null);

  // Handle language change
  useEffect(() => {
    setCode(defaultCode[language as keyof typeof defaultCode]);
  }, [language]);

  // Highlight code on change
  useEffect(() => {
    if (previewRef.current) {
      Prism.highlightElement(previewRef.current);
    }
  }, [code, language]);

  // Update textarea height to match content
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.style.height = 'auto';
      editorRef.current.style.height = `${editorRef.current.scrollHeight}px`;
    }
  }, [code]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const executeCode = () => {
    setIsRunning(true);
    setOutput('');
    
    // Simulate code execution with a delay
    setTimeout(() => {
      let result = '';
      
      try {
        if (language === 'javascript') {
          // For JavaScript, we can actually execute it 
          // Create a safe execution context
          const originalConsoleLog = console.log;
          const logs: string[] = [];
          
          // Override console.log
          console.log = (...args) => {
            logs.push(args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
          };
          
          try {
            // Execute the code
            // eslint-disable-next-line no-new-func
            new Function(code)();
            result = logs.join('\n');
          } catch (error) {
            if (error instanceof Error) {
              result = `Error: ${error.message}`;
            } else {
              result = 'An unknown error occurred';
            }
          }
          
          // Restore console.log
          console.log = originalConsoleLog;
        } else {
          // For other languages, we'll just simulate output
          result = `[Simulated ${language.toUpperCase()} output]\n`;
          
          if (language === 'python') {
            if (code.includes('print(')) {
              result += 'Hello, World!\n';
            }
          } else if (language === 'java') {
            if (code.includes('System.out.println')) {
              result += 'Hello, World!\n';
            }
          }
          
          result += '\nNote: Actual code execution for this language requires a backend service.';
        }
      } catch (error) {
        if (error instanceof Error) {
          result = `Error: ${error.message}`;
        } else {
          result = 'An unknown error occurred';
        }
      }
      
      setOutput(result);
      setIsRunning(false);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="inline-block">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-x">
            Code Playground
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
          Write, test, and experiment with code in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Code Editor - Takes up 2/3 of the space */}
        <div className={`lg:col-span-2 rounded-xl shadow-2xl overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} backdrop-blur-lg backdrop-filter`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50 bg-opacity-90">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select 
                value={language}
                onChange={handleLanguageChange}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm transition-all
                  ${isDarkMode 
                    ? 'bg-gray-800 text-white border-gray-700' 
                    : 'bg-white text-gray-800 border-gray-200'
                  } border focus:ring-2 focus:ring-primary-500 focus:border-transparent
                `}
              >
                {languageOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="relative">
            <textarea
              ref={editorRef}
              value={code}
              onChange={handleCodeChange}
              className={`w-full h-full p-6 font-mono text-base leading-normal resize-none ${
                isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'
              } focus:outline-none focus:ring-0`}
              style={{
                minHeight: '600px',
                maxHeight: '600px',
                overflowY: 'auto',
                tabSize: 2,
              }}
              spellCheck="false"
            />
            <pre 
              ref={previewRef}
              className={`absolute top-0 left-0 w-full h-full p-6 font-mono text-base leading-normal pointer-events-none ${
                isDarkMode ? 'text-gray-300' : 'text-gray-800'
              }`}
              style={{
                minHeight: '600px',
                maxHeight: '600px',
                overflow: 'hidden',
              }}
            >
              <code className={`language-${language}`}>
                {code}
              </code>
            </pre>
          </div>

          <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200'} flex justify-end bg-opacity-90`}>
            <button
              onClick={executeCode}
              disabled={isRunning}
              className={`
                px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all
                ${isRunning 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white transform hover:scale-105'
                }
                shadow-lg hover:shadow-xl
              `}
            >
              {isRunning ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Running...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Run Code
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output panel - Takes up 1/3 of the space */}
        <div className={`rounded-xl shadow-xl overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} backdrop-blur-lg backdrop-filter`}>
          <div className={`p-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'} border-b ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200'}`}>
            <h2 className={`font-semibold flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Output
            </h2>
          </div>
          <div className="p-6" style={{ height: '600px', overflowY: 'auto' }}>
            <pre className={`font-mono text-sm whitespace-pre-wrap ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              {output || 'Your code output will appear here...'}
            </pre>
          </div>
        </div>
      </div>

      <div className={`mt-12 rounded-xl p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} backdrop-blur-lg backdrop-filter`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Tips & Tricks</h2>
        </div>
        <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <li className="flex items-start gap-3">
            <div className="mt-1 h-5 w-5 text-primary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            Switch between programming languages using the dropdown above the editor
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 h-5 w-5 text-primary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            Toggle between light and dark themes with the theme button
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 h-5 w-5 text-primary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            For JavaScript code, use <code className={`px-2 py-0.5 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>console.log()</code> to see output
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 h-5 w-5 text-primary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            Try experimenting with different algorithms or code snippets!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Playground; 