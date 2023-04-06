import PageWrapper from '@/components/common/PageWrapper';
import AskView from '@/components/diary/ask/AskView';

export default function Diary() {
  return (
    <>
      <PageWrapper hideBottomTab={false}>
        <AskView />
      </PageWrapper>
    </>
  );
}
