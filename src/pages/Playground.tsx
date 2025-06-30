import { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

const languageOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
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
  const previewRef = useRef<HTMLElement>(null);

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
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          Code Playground
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Write, test, and experiment with code in real-time
        </p>
      </div>

      <div className={`rounded-xl shadow-2xl overflow-hidden mb-10 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
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
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {languageOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-400 hover:text-white"
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
            className={`w-full p-6 font-mono text-base leading-normal resize-none overflow-hidden outline-none ${
              isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'
            }`}
            style={{
              height: 'auto',
              minHeight: '300px',
              caretColor: isDarkMode ? 'white' : 'black',
            }}
            spellCheck="false"
          />
          <pre className={`pointer-events-none absolute top-0 left-0 w-full p-6 font-mono text-base ${
            isDarkMode ? 'text-gray-300' : 'text-gray-800'
          }`}>
            <code ref={previewRef} className={`language-${language}`}>
              {code}
            </code>
          </pre>
        </div>

        <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-end`}>
          <button
            onClick={executeCode}
            disabled={isRunning}
            className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-all ${
              isRunning 
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-primary-600 hover:bg-primary-700 text-white'
            }`}
          >
            {isRunning ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Running...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Run Code
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output panel */}
      <div className={`rounded-xl shadow-lg overflow-hidden mb-10 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className={`p-3 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Output</h2>
        </div>
        <div className="p-4">
          <pre className={`font-mono text-sm whitespace-pre-wrap ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} style={{ minHeight: '100px' }}>
            {output || 'Your code output will appear here...'}
          </pre>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Tips & Tricks</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Switch between programming languages using the dropdown above the editor.</li>
          <li>Toggle between light and dark themes with the theme button.</li>
          <li>For JavaScript code, you can use <code className="bg-gray-200 px-1 rounded">console.log()</code> to see output.</li>
          <li>Try experimenting with different algorithms or code snippets!</li>
        </ul>
      </div>
    </div>
  );
};

export default Playground; 