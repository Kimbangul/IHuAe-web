import Header from '@/components/common/Header';
import AskStyle, {AskMenu} from './AskStyle';

const AskView = () => {
  return (
    <AskStyle.Wrap>
      <Header title='나의 기록' back={true} menu={AskViewMenu()} />
      <AskStyle.Content>
        <AskStyle.Title.Container>
          <AskStyle.Title.Question>Q.1</AskStyle.Title.Question>
          <AskStyle.Title.Text>Title</AskStyle.Title.Text>
        </AskStyle.Title.Container>
        <AskStyle.Text>contents</AskStyle.Text>
        <AskStyle.Info>0 / 1000자</AskStyle.Info>
      </AskStyle.Content>
    </AskStyle.Wrap>
  );
};

const AskViewMenu = () => {
  return <AskMenu.Button>수정</AskMenu.Button>;
};

export default AskView;
