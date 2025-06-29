import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import '../styles/prism.css';

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="code-block">
      <div className="code-block-language">
        {language}
      </div>
      <pre className="line-numbers">
        <code 
          ref={codeRef} 
          className={`language-${language}`}
        >
          {code.trim()}
        </code>
      </pre>
    </div>
  );
}

// Add global styles
const style = document.createElement('style');
style.textContent = `
  /* Override Prism theme colors for better contrast */
  code[class*="language-"],
  pre[class*="language-"] {
    color: #d4d4d4;
    text-shadow: none;
    background: none;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6a9955;
  }

  .token.punctuation {
    color: #d4d4d4;
  }

  .token.property,
  .token.keyword,
  .token.tag {
    color: #569cd6;
  }

  .token.class-name {
    color: #4ec9b0;
  }

  .token.boolean,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #569cd6;
  }

  .token.number {
    color: #b5cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #ce9178;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #d4d4d4;
    background: none;
  }

  .token.atrule,
  .token.attr-value,
  .token.function {
    color: #dcdcaa;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #d16969;
  }

  /* Line numbers styling */
  .line-numbers .line-numbers-rows {
    border-right: 1px solid #404040;
    padding: 0 0.5em;
  }

  .line-numbers-rows > span:before {
    color: #858585;
  }

  /* Scrollbar styling */
  pre::-webkit-scrollbar {
    height: 10px;
    background-color: #1e1e1e;
  }

  pre::-webkit-scrollbar-thumb {
    background-color: #424242;
    border-radius: 5px;
  }

  pre::-webkit-scrollbar-thumb:hover {
    background-color: #525252;
  }
`;
document.head.appendChild(style); 