import { useEffect, useState, useMemo } from 'react';
import ChatView from './ChatView';
import { ChatBubble } from './ChatType';
import moment from 'moment';

const ChatContainer = () => {
  // PARAM state
  const [data, setData] = useState<ChatBubble[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isMore, setIsMore] = useState(false);

  // PARAM sub header text
  const subHeaderText = useMemo(() => {
    return isMore
      ? '이 곳은 충동적인 감정을 억제하기 위한 곳입니다.'
      : '이 곳은 충동적인 감정을 억제하기 위한 곳입니다.\n상대방에게 하고 싶은 말이 있다면, 이 곳에 써주세요.\n하루가 지나면, 당신의 말들은 사라집니다.';
  }, [isMore]);

  // FUNCTION 메세지 전송
  const sendMsg = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter' || inputVal === '') return;
    e.preventDefault();
    const newMsg = new ChatBubble(moment(), inputVal);
    setData((prev) => [...prev, newMsg]);
    setInputVal('');
  };

  // FUNCTION scroll to bottom
  useEffect(() => {
    if (data.length <= 0) return;
    const chatContent = document.querySelector('#chartContent');
    if (!(chatContent instanceof HTMLElement)) return;
    chatContent.scrollTop = chatContent.scrollHeight;
  }, [data]);

  return (
    <>
      <ChatView
        list={data}
        sendMsg={sendMsg}
        isMore={isMore}
        setIsMore={setIsMore}
        inputVal={inputVal}
        setInputVal={setInputVal}
        subHeaderText={subHeaderText}
      />
    </>
  );
};

export default ChatContainer;
