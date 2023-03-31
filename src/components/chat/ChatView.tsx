import Header from '@/components/common/Header';
import Chat from './ChatStyle';
import BubbleView from "./BubbleView";

const ChatView = () => {
  return(
    <Chat.Container>
      <Header title='header' back={true}/>
      <Chat.Content>
        <Chat.Desc>desc</Chat.Desc>
        <Chat.ChatList>
          <BubbleView content='chat message test'/>
          <BubbleView content='chat message test'/>
          <BubbleView content=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati reiciendis dolor vel dolorem, ducimus cumque ipsa officiis nostrum repellat. Quibusdam, iure earum. Numquam voluptatibus ducimus autem eius, nemo architecto.'/>
        </Chat.ChatList>        
      </Chat.Content>
      <Chat.Input.Container>
        <Chat.Input.Input />
      </Chat.Input.Container>
    </Chat.Container>
  )
}

export default ChatView;