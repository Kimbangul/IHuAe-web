import moment from 'moment';
import Header from '../common/Header';
import makeMonthCalendar, { DateInfo } from './makeCalendar';

const CalendarView = () => {
  const thisMonthCalendar = makeMonthCalendar(2023, 3);

  return (
    <>
      <Header title='캘린더' />
      {thisMonthCalendar.map((week) => {
        return week.map((day) => {
          return <span key={day.date.format('YYYY.MM.DD')}>{day.date.format('MM.DD')}</span>;
        });
      })}
    </>
  );
};

export default CalendarView;
