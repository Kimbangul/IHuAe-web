import PageWrapper from '@/components/common/PageWrapper';
import DetailWriteContainer from '@/components/diary/detail/DetailWriteContainer';

export default function Diary() {
  return (
    <>
      <PageWrapper hideBottomTab={false}>
        <DetailWriteContainer />
      </PageWrapper>
    </>
  );
}
