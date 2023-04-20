import { useRef, useState } from 'react';
import { Calendar } from './DiaryStyle';
import { DiaryViewParamType } from './DiaryType';
import moment from 'moment';
import { start } from 'repl';

const CalendarView = ({ calendar }: DiaryViewParamType) => {
  const scrollRef = useRef<null | HTMLUListElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number>(0);

  const onDragStart = (e: React.MouseEvent | TouchEvent) => {
    e.preventDefault();
    setIsDrag(true);
    if (scrollRef.current?.scrollLeft === undefined) return;
    if (e instanceof TouchEvent) {
      return;
    }
    setStartX(e.pageX + scrollRef.current?.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: React.MouseEvent | TouchEvent) => {
    console.log('drag');
    if (!isDrag || scrollRef.current?.scrollLeft === undefined) return;
    if (e instanceof TouchEvent) {
      return;
    }
    scrollRef.current.scrollLeft = startX - e.pageX;
  };

  return (
    <Calendar.List ref={scrollRef} onMouseDown={onDragStart} onMouseUp={onDragEnd} onMouseMove={(e: React.MouseEvent) => setTimeout(() => onDragMove(e), 200)}>
      {calendar.map((el) => {
        return (
          <Calendar.Item key={el.date.format('MM.DD')} today={el.date.format('YYYY.MM.DD') === moment().format('YYYY.MM.DD')}>
            {el.date.format('D')}
            {/* COMPONENT 당일일 때 아이콘 표시 */}
            {/* <span>
         {
           day.date.format('YYYY.MM.DD') === moment().format('YYYY.MM.DD') &&
           feelIcon !== null &&
         <Calendar.Calendar.TodayIcon>{feelIcon}</Calendar.Calendar.TodayIcon>
         }
         </span> */}
          </Calendar.Item>
        );
      })}
    </Calendar.List>
  );
};

export default CalendarView;
