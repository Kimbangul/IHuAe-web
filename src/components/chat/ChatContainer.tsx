import { useEffect, useState } from "react";
import ChatView from "./ChatView";
import { ChatBubble } from "./ChatType";
import moment from "moment";

const ChatContainer = () => {

  // PARAM state
  const [data, setData] = useState<ChatBubble[]>([]);
  const [inputVal, setInputVal] = useState('');

  const sendMsg = (msg: string) =>{
    const newMsg = new ChatBubble(moment(), msg);
    setData((prev) => [...prev, newMsg]);
  } 

  return(
    <>
      <ChatView list={data} sendMsg={sendMsg}/>
    </>
  )
}

export default ChatContainer;