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
    const newMsg = new ChatBubble(moment(), inputVal);
    setData((prev) => [...prev, newMsg]);
    setInputVal('');
  } 

  return(
    <>
      <ChatView list={data} sendMsg={sendMsg} inputVal={inputVal} setInputVal={setInputVal}/>
    </>
  )
}

export default ChatContainer;