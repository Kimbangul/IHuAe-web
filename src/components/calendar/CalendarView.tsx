import styled from 'styled-components';
import Header from '../common/Header';
import makeMonthCalendar from './makeCalendar';
import { CalendarViewParamType } from './CalendarType';

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
         <div key={`week${idx}`}>
          {
             week.map(day => {
              return <span data-current={day.currentMonth} key={day.date.format('YYYY.MM.DD')}>{day.date.format('MM.DD')}</span>
              })
          }
         </div>
        )        
      })}
      </Calendar.Calendar.Container>
      <section>
      <h2>오늘의 기분</h2>
      <div>
        <div>
          <span></span>
          <p>오늘은 어떤 기분이 드나요?</p>
        </div>
        <p>{`(기분에 대해서 기록해보세요)`}</p>
      </div>
      </section>
      </Calendar.Content>
    </Calendar.Wrap>
  );
};


// COMPONENT style
const Calendar= {
  Wrap: styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;    
  `,
  Content: styled.div`
    background: ${({theme})=> theme.color.bg.bg_01};
    flex-grow: 1;    
  `,
  Calendar : {
    Container : styled.section`
      background-color: ${({theme})=> theme.color.white};
      border-radius: 0 0 2.3rem 2.3rem;
      padding: 2rem 2.4rem 4rem 2.4rem;
      box-shadow: 0 0.4rem 1rem rgba(0,0,0,0.14);    
    `,
    MonthInfo : styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    MonthText: styled.h2`
      color: ${({theme}) => theme.color.text.text_09};
      font-size: 2rem;
      ${({theme}) => theme.font.sans.bold};
    `,
    Week: styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      margin-top: 3.6rem;
    `,
    WeekItem: styled.span`
      display: inline-block;
      text-align: center;
    `
  }
};


export default CalendarView;
