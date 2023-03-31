import PageWrapper from '@/components/common/PageWrapper';
import ChatContainer from '@/components/chat/ChatContainer';

export default function Chat() {
  return (
    <>
      <PageWrapper hideBottomTab={false}>
        <ChatContainer />
      </PageWrapper>
    </>
  );
}
