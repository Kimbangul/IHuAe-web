import Header from '@/components/common/Header';
import Chat from './ChatStyle';

const ChatView = () => {
  return(
    <Chat.Container>
      <Header title='header' back={true}/>
      <Chat.Content>
        <Chat.Desc>desc</Chat.Desc>
      </Chat.Content>
      <Chat.Input.Container>
        <Chat.Input.Input />
      </Chat.Input.Container>
    </Chat.Container>
  )
}

export default ChatView;