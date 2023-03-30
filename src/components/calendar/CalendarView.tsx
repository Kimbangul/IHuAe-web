import moment from 'moment';
import Header from '../common/Header';
import makeMonthCalendar, { DateInfo } from './makeCalendar';

const CalendarView = () => {
  const thisMonthCalendar = makeMonthCalendar(2023, 3);

  return (
    <>
      <Header title='캘린더' />
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
