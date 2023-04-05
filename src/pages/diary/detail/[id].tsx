import PageWrapper from '@/components/common/PageWrapper';
import DetailView from '@/components/diary/detail/DetailView';

export default function Diary() {
  return (
    <>
      <PageWrapper hideBottomTab={false}>
        <DetailView />
      </PageWrapper>
    </>
  );
}
