import { useState } from 'react'
import { model } from "./geminiModule.js"
import './gemini.css'
// import '../../../node_modules/@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'; //give styling for comps
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"

function Gemini() {
  const [typing, setTyping] = useState(false);
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Gemini.",
      sender: "Gemini",
      direction: "incoming" //show on left side of screen (msg we recieve)
    }
  ])

  const handleSend = async (inputMessage) => {
    const newMessage = {
      message: inputMessage,
      sender: "User",
      direction: "outgoing" //show on right side of screen (msg we send out)
    }

    setMessages((prevMessages) => [...prevMessages, newMessage]);//all the old ones + new one. append the new to the old list
    //update message state

    //set a typing indicator (chatgpt is typing...)
    setTyping(true);
    
    //process message to gemini (send over see response)
    let reply = {
      message: await processMessage(inputMessage), //a bit in depth
      sender: "Gemini",
      direction: "incoming" //show on left side of screen (msg we recieve)
    }
    setMessages((prevMessages) => [...prevMessages, reply]); //set the new reply in
  }

  async function processMessage(chatMessages) {
    try{
      const result = await model.generateContent(chatMessages);
      const response = result.response.text();
      setTyping(false);
      return response;
    }catch (error){
      console.log(error);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="h-150 w-100 bg-white rounded-xl shadow-lg overflow-hidden">
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={typing ? <TypingIndicator content="Gemini is typing to destroy u..." /> : null}
              >
                {messages.map((message, index) => {
                  return <Message key={index} model={message} />;
                })}
              </MessageList>
              <MessageInput placeholder='Type message here: ' onSend={handleSend} />
            </ChatContainer>
          </MainContainer>
        </div>
      )}
      {/* Floating Chat Button */}
      <button
        onClick={() => {setOpen(!open); console.log("clicked")}} //toggle open/close    
        className="bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700"
      >
        💬
      </button>
    </div>
  );
  
}

export default Gemini