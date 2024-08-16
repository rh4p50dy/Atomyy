import ReactMarkdown from 'react-markdown';
import './Conversation.css';

function Conversation({conversationHistory}: {conversationHistory: { role: "user" | "model"; text: string; isLoading?: boolean }[]}) {
  return (
    <>
        
          {conversationHistory.map((message, index) => (
            <li className='text-lg' key={index}>
              <p className='text-xl font-bold '>{message.role === "user" ? "You : " : "Model : "}</p>
              <ReactMarkdown>{message.text}</ReactMarkdown>
              {message.isLoading && <span className="text-gray-400">(Loading...)</span>}
              <br />
            </li>
            
          ))}
    </>
  )
}

export default Conversation