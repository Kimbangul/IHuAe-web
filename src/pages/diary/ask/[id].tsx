import PageWrapper from '@/components/common/PageWrapper';
import AskContainer from '@/components/diary/ask/AskContainer';

export default function Diary() {
  return (
    <>
      <PageWrapper hideBottomTab={false}>
        <AskContainer />
      </PageWrapper>
    </>
  );
}
