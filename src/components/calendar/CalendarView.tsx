import Header from '../common/Header';
import makeMonthCalendar from './makeCalendar';
import { CalendarViewParamType } from './CalendarType';
import { Calendar, Feel } from './CalendarStyle';

const CalendarView = ({year, month,setCalendarInfo} : CalendarViewParamType) => {
  const thisMonthCalendar = makeMonthCalendar(year, month);
  const week = ['일','월','화','수', '목','금','토'];

  return (
    <Calendar.Wrap>
      <Header title='캘린더' />
      <Calendar.Content className='contents'>
      <Calendar.Calendar.Container>
      <Calendar.Calendar.MonthInfo>
        <button onClick={() => setCalendarInfo({type: 'DECREASE_MONTH'})}>월 -1</button>
        <Calendar.Calendar.MonthText>{year}년 {month}월</Calendar.Calendar.MonthText>
        <button onClick={()=>setCalendarInfo({type: 'INCREASE_MONTH'})}>월 +1</button>
      </Calendar.Calendar.MonthInfo>
      {/* <button onClick={() => setCalendarInfo({type: 'INCREASE_YEAR'})}>년도 +1</button>
      <button onClick={() => setCalendarInfo({type: 'DECREASE_YEAR'})}>년도 -1</button>
       */}      
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
      <div>
        <div>
          <span></span>
          <p>오늘은 어떤 기분이 드나요?</p>
        </div>
        <p>{`(기분에 대해서 기록해보세요)`}</p>
      </div>
      </Feel.Container>
      </Calendar.Content>
    </Calendar.Wrap>
  );
};





export default CalendarView;
