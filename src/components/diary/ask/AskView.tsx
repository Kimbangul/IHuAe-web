import { useEffect, useRef } from 'react';
import Header from '@/components/common/Header';
import AskStyle, { AskMenu } from './AskStyle';
import { AskParamType, ContentType, EditType } from './AskType';

const AskView: React.FC<AskParamType> = ({ content, setContent, isEdit, setIsEdit }) => {
  const editRef = useRef<null | HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!isEdit) return;
    const input = document.querySelector('#Ask__Input');
    if (!(input instanceof HTMLTextAreaElement)) return;
    input?.focus();
  }, [isEdit]);

  return (
    <AskStyle.Wrap>
      <Header title='문답 작성' back={true} menu={AskViewMenu({isEdit, setIsEdit})}/>
      <AskStyle.Content>
        <AskStyle.Title.Container>
          <AskStyle.Title.Text as='span'>Q.1</AskStyle.Title.Text>
          <AskStyle.Title.Text>Title</AskStyle.Title.Text>
        </AskStyle.Title.Container>
        {!isEdit ? <AskStyle.Text>{content}</AskStyle.Text> : <AskEditView content={content} setContent={setContent} />}
        <AskStyle.Info>{content.length} / 1000자</AskStyle.Info>
      </AskStyle.Content>
    </AskStyle.Wrap>
  );
};

const AskEditView: React.FC<ContentType> = ({ content, setContent }) => {
  return (
    <AskStyle.Textarea id='Ask__Input' maxLength={1000} onChange={(e) => setContent(e.target.value)}>
      {content}
    </AskStyle.Textarea>
  );
};

const AskViewMenu: React.FC<EditType> = ({ isEdit, setIsEdit }) => {
  return <AskMenu.Button onClick={() => setIsEdit(!isEdit)}>{isEdit ? '작성 완료' : '수정'}</AskMenu.Button>;
};

export default AskView;
