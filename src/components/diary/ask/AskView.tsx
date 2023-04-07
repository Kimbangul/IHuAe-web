import Header from '@/components/common/Header';
import AskStyle, {AskMenu} from './AskStyle';
import { AskParamType, ContentType, EditType } from './AskType';

const AskView : React.FC<AskParamType> = ({content, setContent, isEdit, setIsEdit}) => {
  return (
    <AskStyle.Wrap>
      <Header title='나의 기록' back={true} menu={AskViewMenu({isEdit, setIsEdit})} />
      <AskStyle.Content>
        <AskStyle.Title.Container>
          <AskStyle.Title.Question>Q.1</AskStyle.Title.Question>
          <AskStyle.Title.Text>Title</AskStyle.Title.Text>
        </AskStyle.Title.Container>
        {
          !isEdit ?
          <AskStyle.Text>{content}</AskStyle.Text> :
          < AskEditView content={content} setContent={setContent}/>
        }
        <AskStyle.Info>{content.length} / 1000자</AskStyle.Info>
      </AskStyle.Content>
    </AskStyle.Wrap>
  );
};

const AskEditView : React.FC<ContentType> = ({content, setContent}) => {
  return(
    <textarea onChange={(e)=>setContent(e.target.value)}>
      {content}
    </textarea>
  )
}

const AskViewMenu : React.FC<EditType> = ({isEdit, setIsEdit}) => {
  return <AskMenu.Button onClick={()=>setIsEdit(!isEdit)}>수정</AskMenu.Button>;
};

export default AskView;
