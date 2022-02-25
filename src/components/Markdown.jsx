import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

function Markdown(props) {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={coldarkCold}
              language={match[1]}
              PreTag='div'
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        table({ children, ...props }) {
          return <div style={{ overflow: 'auto' }}><table {...props}>{children}</table></div>
        }
      }}
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}>
      {props.children}
    </ReactMarkdown>
  );
}

export default Markdown;