import moment from 'moment';
import Header from '@/components/common/Header';
import { Menu, Detail } from './DetailStyle';
import { DetailParamType, ContentType, EditType } from './DetailType';

const DetailView : React.FC<DetailParamType> = ({content, setContent, isEdit, setIsEdit}) => {
  const tmpAmPm = moment().format(`a`) ==='pm'?'오후':'오전';
  const tmpTime = moment().format(`YYYY.MM.DD ${tmpAmPm} HH:mm`);
  return(
    <Detail.Wrap>
      <Header title='나의 기록' back={true} menu={DetailViewMenu({isEdit, setIsEdit})}/>
      <Detail.Inner className='inner'>
        <Detail.Title>
        {
          !isEdit ?
          'Title' :
          <Detail.TitleInput type="text"/>
        }
        </Detail.Title>
        <Detail.Content>
          {
            !isEdit ?
            <>
              <Detail.Text>{content}</Detail.Text>
              <Detail.Date>{tmpTime}</Detail.Date>
            </> :
            <DetailEditView content={content} setContent={setContent}/>
          }
          
        </Detail.Content>
      </Detail.Inner>
    </Detail.Wrap>
  )
}

const DetailViewMenu :React.FC<EditType> = ({isEdit, setIsEdit}) => {
  return(
    <Menu.List>
      <Menu.Item onClick={()=> setIsEdit(!isEdit)}>
        수정
      </Menu.Item>
      <Menu.Item>
        삭제
      </Menu.Item>
    </Menu.List>
  )
}

const DetailEditView : React.FC<ContentType>  = ({content, setContent}) => {
  return(
    <Detail.Textarea id='Ask__Input'>
      {content}
    </Detail.Textarea>
  )
}

export default DetailView;