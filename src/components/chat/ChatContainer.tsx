import { useEffect, useState, useMemo } from "react";
import ChatView from "./ChatView";
import { ChatBubble } from "./ChatType";
import moment from "moment";

const ChatContainer = () => {

  // PARAM state
  const [data, setData] = useState<ChatBubble[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isMore, setIsMore] = useState(false);

  // PARAM sub header text
  const subHeaderText = useMemo(()=>{
    return isMore ? '열림 상태 열림 상태 열림 상태' : '닫힘 상태';
  }, [isMore]);

  // FUNCTION 메세지 전송
  const sendMsg = (e: React.KeyboardEvent<HTMLTextAreaElement>) =>{   
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const newMsg = new ChatBubble(moment(), inputVal);
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
      <ChatView list={data} sendMsg={sendMsg} isMore={isMore} setIsMore={setIsMore} inputVal={inputVal} setInputVal={setInputVal} subHeaderText={subHeaderText}/>
    </>
  )
}

export default ChatContainer;