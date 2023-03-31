import Header from '../common/Header';
import makeMonthCalendar from './makeCalendar';
import { CalendarViewParamType } from './CalendarType';
import { Calendar, Feel } from './CalendarStyle';
import CHEVRON_12 from '@/assets/icons/calendar/chevron_12.svg';

const CalendarView = ({year, month,setCalendarInfo} : CalendarViewParamType) => {
  const thisMonthCalendar = makeMonthCalendar(year, month);
  const week = ['일','월','화','수', '목','금','토'];

  return (
    <Calendar.Wrap>
      <Header title='캘린더' />
      <Calendar.Content className='contents'>
      <Calendar.Calendar.Container>
      <Calendar.Calendar.MonthInfo>
        <Calendar.Calendar.Button direction='prev' onClick={() => setCalendarInfo({type: 'DECREASE_MONTH'})}><CHEVRON_12 /></Calendar.Calendar.Button>
        <Calendar.Calendar.MonthText>{year}년 {month}월</Calendar.Calendar.MonthText>
        <Calendar.Calendar.Button direction='next' onClick={()=>setCalendarInfo({type: 'INCREASE_MONTH'})}><CHEVRON_12 /></Calendar.Calendar.Button>
      </Calendar.Calendar.MonthInfo>  
       <Calendar.Calendar.Week>
       {week.map(el => {
        return <Calendar.Calendar.WeekItem key={el}>{el}</Calendar.Calendar.WeekItem>
       })}
       </Calendar.Calendar.Week>
      {thisMonthCalendar.map((week, idx) => {
        return (
         <Calendar.Calendar.Row key={`week${idx}`}>
          {
             week.map(day => {
              return (
                <Calendar.Calendar.Date 
                current={day.currentMonth} 
                key={day.date.format('YYYY.MM.DD')}>
                  {day.date.format('D')}
                </Calendar.Calendar.Date>
                )
              })
          }
         </Calendar.Calendar.Row>
        )        
      })}
      </Calendar.Calendar.Container>
      <Feel.Container>
      <Feel.Title>오늘의 기분</Feel.Title>
      <Feel.Content.Container>
        <Feel.Content.Title>
          <Feel.Content.Icon feelStyle={null}></Feel.Content.Icon>
          <Feel.Content.TitleText>오늘은 어떤 기분이 드나요?</Feel.Content.TitleText>
        </Feel.Content.Title>
        <Feel.Content.Desc>{`(기분에 대해서 기록해보세요)`}</Feel.Content.Desc>
      </Feel.Content.Container>
      </Feel.Container>
      </Calendar.Content>
    </Calendar.Wrap>
  );
};





export default CalendarView;
