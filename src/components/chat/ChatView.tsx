import Header from '@/components/common/Header';
import Chat from './ChatStyle';
import BubbleView from "./BubbleView";
import { ChatViewPropsType } from './ChatType';

const ChatView = ({list, sendMsg} :  ChatViewPropsType) => {
  return(
    <Chat.Container>
      <Header title='header' back={true}/>
      <Chat.Content>
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
        <Chat.Input.Input />
      </Chat.Input.Container>
    </Chat.Container>
  )
}

export default ChatView;