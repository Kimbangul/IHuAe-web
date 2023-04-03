import { useEffect, useState } from "react";
import ChatView from "./ChatView";
import { ChatBubble } from "./ChatType";
import moment from "moment";

const ChatContainer = () => {

  // PARAM state
  const [data, setData] = useState<ChatBubble[]>([]);
  const [inputVal, setInputVal] = useState('');


  // FUNCTION 메세지 전송
  const sendMsg = (e: React.KeyboardEvent<HTMLTextAreaElement>) =>{   
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const newMsg = new ChatBubble(moment(), inputVal);
    console.log(newMsg);
    setData((prev) => [...prev, newMsg]);
    setInputVal('');    
  } 

  // FUNCTION scroll to bottom
  useEffect(()=>{
    if(data.length <= 0) return;
    const chatContent = document.querySelector('#chartContent');
    if (!(chatContent instanceof HTMLElement)) return;
    chatContent.scrollTop = chatContent.scrollHeight;
  }, [data]);

  return(
    <>
      <ChatView list={data} sendMsg={sendMsg} inputVal={inputVal} setInputVal={setInputVal}/>
    </>
  )
}

export default ChatContainer;