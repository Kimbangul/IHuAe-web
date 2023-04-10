import PageWrapper from '@/components/common/PageWrapper';
import DetailContainer from '@/components/diary/detail/DetailContainer';

export default function Diary() {
  return (
    <>
      <PageWrapper hideBottomTab={false}>
        <DetailContainer />
      </PageWrapper>
    </>
  );
}
