import Header from '@/components/common/Header';
import Chat, { SubHeader } from './ChatStyle';
import BubbleView from './BubbleView';
import { ChatViewPropsType } from './ChatType';
import SUBHEADER_CHEVRON_14 from '@/assets/icons/chat/subheader_chevron_14.svg';

const ChatView = ({ list, sendMsg, setInputVal, inputVal, subHeaderText, isMore, setIsMore }: ChatViewPropsType) => {
  return (
    <Chat.Container>
      <Header title='감정 억제기' back={true} />
      <SubHeader.Container>
        <SubHeader.Desc>{subHeaderText}</SubHeader.Desc>
        <SubHeader.Button isMore={isMore} onClick={() => setIsMore(!isMore)}>
          <SUBHEADER_CHEVRON_14 />
        </SubHeader.Button>
      </SubHeader.Container>
      <Chat.Content id='chartContent'>
        <Chat.Desc>
          이 곳은 충동적인 감정을 억제하기 위한 곳입니다.
          <br />
          상대방에게 하고 싶은 말이 있다면, 이 곳에 써주세요. <br />
          하루가 지나면, 당신의 말들은 사라집니다.
        </Chat.Desc>
        <Chat.ChatList>
          {list.map((el, idx) => {
            return <BubbleView content={el.message} key={`message${idx}`} />;
          })}
        </Chat.ChatList>
      </Chat.Content>
      <Chat.Input.Container>
        <Chat.Input.Input value={inputVal} onChange={(e) => setInputVal(e.target.value)} onKeyPress={sendMsg} />
      </Chat.Input.Container>
    </Chat.Container>
  );
};

export default ChatView;
