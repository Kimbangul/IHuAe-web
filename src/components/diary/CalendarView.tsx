import { useRef, useState } from 'react';
import { Calendar } from './DiaryStyle';
import { DiaryViewParamType } from './DiaryType';
import moment from 'moment';
import { start } from 'repl';

const CalendarView = ({ calendar }: DiaryViewParamType) => {
  const scrollRef = useRef<null | HTMLUListElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number>(0);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (scrollRef.current?.scrollLeft === undefined) return;
    setIsDrag(true);
    console.log(typeof e);

    if (e instanceof TouchEvent) {
      // e.targetTouches[0].preventDefault();
      setStartX(e.changedTouches[0].pageX + scrollRef.current?.scrollLeft);
    }
    if (e instanceof MouseEvent) {
      setStartX(e.pageX + scrollRef.current?.scrollLeft);
      console.log('mouse', scrollRef.current?.scrollLeft);
    }
    console.log(startX);
  };

  const onDragEnd = () => {
    console.log(startX);
    setIsDrag(false);
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    // console.log('drag move');
    console.log(startX);
    console.log(typeof e);

    if (!isDrag || scrollRef.current?.scrollLeft === undefined) return;

    if (e instanceof TouchEvent) {
      scrollRef.current.scrollLeft = startX - e.changedTouches[0].pageX;
      return;
    }
    if (e instanceof MouseEvent) {
      console.log(e.pageX);
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <Calendar.List
      ref={scrollRef}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onMouseMove={(e: React.MouseEvent) => setTimeout(() => onDragMove(e), 200)}
      // onTouchEnd={() => onDragStart}
      // onTouchStart={onDragStart}
      // onTouchMove={(e: React.TouchEvent) => setTimeout(() => onDragMove(e), 200)}
    >
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
