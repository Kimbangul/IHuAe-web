import Header from '../common/Header';
import makeMonthCalendar from './makeCalendar';
import { CalendarViewParamType } from './CalendarType';

const CalendarView = ({year, month,setCalendarInfo} : CalendarViewParamType) => {
  const thisMonthCalendar = makeMonthCalendar(year, month);

  return (
    <>
      <Header title='캘린더' />
      <div>{year}년 {month}월</div>
      <button onClick={() => {}}>년도 +1</button>
      <button>년도 -1</button>
      <button>월 +1</button>
      <button>월 -1</button>
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
    </>
  );
};


export default CalendarView;
