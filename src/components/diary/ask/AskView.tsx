import Header from '@/components/common/Header';
import AskStyle from './AskStyle';

const AskView = () => {
  return (
    <AskStyle.Wrap>
      <Header title='나의 기록' back={true} menu={AskViewMenu()} />
      <AskStyle.Content>
        <AskStyle.Title.Container>
          <span></span>
          <h2>X와 어떻게 헤어졌는지 자세히 말해줄래요?</h2>
        </AskStyle.Title.Container>
        <AskStyle.Text>contents</AskStyle.Text>
        <AskStyle.Info>0 / 1000자</AskStyle.Info>
      </AskStyle.Content>
    </AskStyle.Wrap>
  );
};

const AskViewMenu = () => {
  return <button>작성 완료</button>;
};

export default AskView;
