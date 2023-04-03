import Header from '@/components/common/Header';
import Chat, {SubHeader} from './ChatStyle';
import BubbleView from "./BubbleView";
import { ChatViewPropsType } from './ChatType';
import SUBHEADER_CHEVRON_14 from '@/assets/icons/chat/subheader_chevron_14.svg';

const ChatView = ({list, sendMsg, setInputVal, inputVal, subHeaderText, isMore, setIsMore} :  ChatViewPropsType) => {
  return(
    <Chat.Container>
      <Header title='header' back={true}/>
      <SubHeader.Container>
        <SubHeader.Desc>{subHeaderText}</SubHeader.Desc>
        <SubHeader.Button isMore={isMore} onClick={()=>setIsMore(!isMore)}>
          <SUBHEADER_CHEVRON_14 />
        </SubHeader.Button>        
      </SubHeader.Container>
      <Chat.Content id='chartContent'>
        <Chat.Desc>desc</Chat.Desc>
        <Chat.ChatList>
          {
            list.map((el, idx) => {
              return <BubbleView content={el.message} key={`message${idx}`}/>
            })
          }   
        </Chat.ChatList>        
      </Chat.Content>
      <Chat.Input.Container>
        <Chat.Input.Input value={inputVal} onChange={(e) => setInputVal(e.target.value)} onKeyPress={sendMsg}/>
      </Chat.Input.Container>
    </Chat.Container>
  )
}

export default ChatView;