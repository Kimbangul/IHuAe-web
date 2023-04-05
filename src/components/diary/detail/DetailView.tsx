import moment from 'moment';
import Header from '@/components/common/Header';
import { Menu, Detail } from './DetailStyle';

const DetailView = () => {
  const tmpAmPm = moment().format(`a`) ==='pm'?'오후':'오전';
  const tmpTime = moment().format(`YYYY.MM.DD ${tmpAmPm} HH:mm`);
  return(
    <Detail.Wrap>
      <Header title='나의 기록' back={true} menu={DetailViewMenu()}/>
      <Detail.Inner className='inner'>
        <Detail.Title>title</Detail.Title>
        <Detail.Content>
          <Detail.Text>contents page</Detail.Text>
          <Detail.Date>{tmpTime}</Detail.Date>
        </Detail.Content>
      </Detail.Inner>
    </Detail.Wrap>
  )
}

const DetailViewMenu = () => {
  return(
    <Menu.List>
      <Menu.Item>
        수정
      </Menu.Item>
      <Menu.Item>
        삭제
      </Menu.Item>
    </Menu.List>
  )
}

export default DetailView;