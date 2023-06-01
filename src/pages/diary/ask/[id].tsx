import { useRouter } from 'next/router';
import PageWrapper from '@/components/common/PageWrapper';
import AskContainer from '@/components/diary/ask/AskContainer';

export default function Diary() {
  const router = useRouter();
  console.log(router);
  
  return (
    <>
      <PageWrapper hideBottomTab={false}>
        <AskContainer />
      </PageWrapper>
    </>
  );
}
