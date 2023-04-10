import Header from '@/components/common/Header';
import AskStyle, { Menu } from './AskStyle';

const AskView = () => {
  return (
    <AskStyle.Wrap>
      <Header title='나의 기록' back={true} menu={AskViewMenu()} />
      <AskStyle.Content>
        <AskStyle.Title.Container>
          <AskStyle.Title.Text as='span'>Q.1</AskStyle.Title.Text>
          <AskStyle.Title.Text>X와 어떻게 헤어졌는지 자세히 말해줄래요?</AskStyle.Title.Text>
        </AskStyle.Title.Container>
        <AskStyle.Text>contents</AskStyle.Text>
        <AskStyle.Info>0 / 1000자</AskStyle.Info>
      </AskStyle.Content>
    </AskStyle.Wrap>
  );
};

const AskViewMenu = () => {
  return <Menu.Item>작성 완료</Menu.Item>;
};

export default AskView;
