import { useState, useEffect, useRef } from 'react';
import type { WheelEvent } from 'react';
import Editor from '@monaco-editor/react';
import type { OnMount } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

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
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle language change
  useEffect(() => {
    setCode(defaultCode[language as keyof typeof defaultCode]);
  }, [language]);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  // Handle wheel events to allow page scrolling
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // If the editor is scrolled to the top and trying to scroll up, or
    // scrolled to the bottom and trying to scroll down, allow the event to propagate
    if (editorRef.current) {
      const editorScrollTop = editorRef.current.getScrollTop();
      const editorScrollHeight = editorRef.current.getScrollHeight();
      const editorHeight = editorRef.current.getLayoutInfo().height;
      
      const isAtTop = editorScrollTop <= 0;
      const isAtBottom = editorScrollTop + editorHeight >= editorScrollHeight;
      
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        // Allow page to scroll
        return;
      } else {
        // Prevent page from scrolling
        e.stopPropagation();
      }
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    // Map language values to Monaco language IDs
    const monacoLang = newLang === 'javascript' ? 'javascript' : 
                      newLang === 'python' ? 'python' : 
                      'java';
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, monacoLang);
      }
    }
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
    <div className="container mx-auto px-4 py-8">
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
        <div className="lg:col-span-2">
          <div className={`rounded-xl shadow-2xl overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
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

            <div 
              ref={containerRef}
              onWheel={handleWheel}
              style={{ height: "350px", maxHeight: "350px" }}
              className="editor-container"
            >
              <Editor
                height="350px"
                defaultLanguage="javascript"
                language={language}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme={isDarkMode ? 'vs-dark' : 'light'}
                options={{
                  fontSize: 14,
                  fontFamily: 'Fira Code, monospace',
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                  wordWrap: 'on',
                  suggestOnTriggerCharacters: true,
                  quickSuggestions: true,
                  snippetSuggestions: 'inline',
                  formatOnType: true,
                  formatOnPaste: true,
                  scrollbar: {
                    useShadows: false,
                    verticalHasArrows: true,
                    horizontalHasArrows: true,
                    vertical: 'visible',
                    horizontal: 'visible',
                    verticalScrollbarSize: 12,
                    horizontalScrollbarSize: 12,
                    alwaysConsumeMouseWheel: false
                  }
                }}
                onMount={handleEditorDidMount}
                loading={
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                  </div>
                }
              />
            </div>

            <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200'} flex justify-end`}>
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
        </div>

        {/* Output panel - Takes up 1/3 of the space */}
        <div className={`rounded-xl shadow-xl overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className={`p-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'} border-b ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200'}`}>
            <h2 className={`font-semibold flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Output
            </h2>
          </div>
          <div className="p-6" style={{ height: "350px", maxHeight: "350px", overflowY: "auto" }}>
            <pre className={`font-mono text-sm whitespace-pre-wrap ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              {output || 'Your code output will appear here...'}
            </pre>
          </div>
        </div>
      </div>

      <div className={`mt-12 rounded-xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
        <div className={`p-6 ${isDarkMode ? 'bg-gradient-to-r from-primary-900/50 to-secondary-900/50' : 'bg-gradient-to-r from-primary-100 to-secondary-100'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Tips & Tricks</h2>
          </div>
          <p className={`ml-13 pl-1 mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Enhance your coding experience with these helpful tips
          </p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tip 1 */}
            <div className={`p-6 rounded-xl ${isDarkMode 
              ? 'bg-gray-900/50 hover:bg-gray-900 border border-gray-800' 
              : 'bg-white hover:bg-gray-50 border border-gray-100'} 
              transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-primary-900/50' : 'bg-primary-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Code Completion
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Press <span className={`px-2 py-0.5 rounded font-mono text-sm ${isDarkMode ? 'bg-gray-800 text-primary-400' : 'bg-gray-100 text-primary-600'}`}>Ctrl+Space</span> to trigger code suggestions and autocomplete
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 2 */}
            <div className={`p-6 rounded-xl ${isDarkMode 
              ? 'bg-gray-900/50 hover:bg-gray-900 border border-gray-800' 
              : 'bg-white hover:bg-gray-50 border border-gray-100'} 
              transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-secondary-900/50' : 'bg-secondary-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Theme Toggle
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Switch between light and dark themes with the theme button in the editor toolbar
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 3 */}
            <div className={`p-6 rounded-xl ${isDarkMode 
              ? 'bg-gray-900/50 hover:bg-gray-900 border border-gray-800' 
              : 'bg-white hover:bg-gray-50 border border-gray-100'} 
              transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-primary-900/50' : 'bg-primary-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Console Output
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    For JavaScript, use <span className={`px-2 py-0.5 rounded font-mono text-sm ${isDarkMode ? 'bg-gray-800 text-primary-400' : 'bg-gray-100 text-primary-600'}`}>console.log()</span> to see output in the results panel
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className={`p-6 rounded-xl ${isDarkMode 
              ? 'bg-gray-900/50 hover:bg-gray-900 border border-gray-800' 
              : 'bg-white hover:bg-gray-50 border border-gray-100'} 
              transition-all duration-300 shadow-md hover:shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-secondary-900/50' : 'bg-secondary-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Multiple Languages
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Switch between JavaScript, Python, and Java using the language dropdown
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-8 p-4 rounded-lg text-center ${isDarkMode ? 'bg-gray-900/50 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
            <p>
              <span className="font-semibold">Pro Tip:</span> Try experimenting with different algorithms and code snippets to improve your coding skills!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground; 