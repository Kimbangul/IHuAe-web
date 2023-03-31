import moment from 'moment';
import { useDispatch } from 'react-redux';

import Header from '../common/Header';
import makeMonthCalendar from './makeCalendar';
import { CalendarViewParamType } from './CalendarType';
import { Calendar, Feel } from './CalendarStyle';
import CHEVRON_12 from '@/assets/icons/calendar/chevron_12.svg';




const CalendarView = ({year, month,setCalendarInfo, feelIcon, feelState, feelDesc, onClickTodayFeel} : CalendarViewParamType) => {
  const thisMonthCalendar = makeMonthCalendar(year, month);
  const dispatch = useDispatch();
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
                  today={day.date.format('YYYY.MM.DD') === moment().format('YYYY.MM.DD')}
                  current={day.currentMonth} 
                  key={day.date.format('YYYY.MM.DD')}
                >
                  <span className='date__number'>{day.date.format('D')}</span>
                  {/* COMPONENT 당일일 때 아이콘 표시 */}
                  {
                    day.date.format('YYYY.MM.DD') === moment().format('YYYY.MM.DD') &&
                    feelIcon !== null &&
                    <Calendar.Calendar.TodayIcon>{feelIcon}</Calendar.Calendar.TodayIcon>
                  }
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
      <Feel.Content.Container onClick={onClickTodayFeel}>
        <Feel.Content.Title>
          <Feel.Content.Icon feelIcon={feelIcon}>{feelIcon}</Feel.Content.Icon>
          <Feel.Content.TitleText>{feelState}</Feel.Content.TitleText>
        </Feel.Content.Title>
        <Feel.Content.Desc>
          {feelDesc}
        </Feel.Content.Desc>
      </Feel.Content.Container>
      </Feel.Container>
      </Calendar.Content>
    </Calendar.Wrap>
  );
};





export default CalendarView;
