import { useRef, useState } from 'react';
import { Calendar } from './DiaryStyle';
import { DiaryViewParamType } from './DiaryType';
import moment from 'moment';

const CalendarView = ({ calendar }: DiaryViewParamType) => {25
  const scrollRef = useRef<null | HTMLUListElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // FUNCTION
  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!(scrollRef.current?.offsetLeft)) return;
    let x = 0;
    setIsDrag(true);

    if (e.nativeEvent instanceof MouseEvent){
      x = e.nativeEvent.pageX - scrollRef.current?.offsetLeft;
    }
    else if (e.nativeEvent instanceof TouchEvent){
      x = e.nativeEvent.changedTouches[0].pageX - scrollRef.current?.offsetLeft;
    }

    setStartX(x);
    setScrollLeft(scrollRef.current.scrollLeft);
  }

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!(scrollRef.current?.offsetLeft) || !isDrag) return;
    let x = 0;

    if (e.nativeEvent instanceof MouseEvent){
      x = e.nativeEvent.pageX - scrollRef.current.offsetLeft;
    }
    else if (e.nativeEvent instanceof TouchEvent){
      x = e.nativeEvent.changedTouches[0].pageX - scrollRef.current.offsetLeft;
    }

    const walk = (x-startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }

  const onDragEnd = () => {
    if (!(scrollRef.current?.scrollLeft)) return;
    setIsDrag(false);
  }

  return (
    <Calendar.List
      ref={scrollRef}
      onMouseDown = {onDragStart}
      onMouseUp ={onDragEnd}
      onMouseLeave={onDragEnd}
      onMouseMove={onMouseMove}
      onTouchEnd={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onMouseMove}
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
