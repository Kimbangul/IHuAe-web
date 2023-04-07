import { useRef, useState } from "react";
import { Calendar } from "./DiaryStyle";
import { DiaryViewParamType } from "./DiaryType";
import moment from "moment";

const CalendarView = ({ calendar }: DiaryViewParamType) => {
  const scorllRef = useRef<null | HTMLUListElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX]= useState(0);

  const onDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + (scorllRef.current?.scrollLeft || 0));
  }

  const onDragEnd = () => {
    setIsDrag(false);
  }

  const onDragMove = (e: React.MouseEvent) => {
    if (!isDrag) return;
    if (!scorllRef.current?.scrollLeft) return;
    scorllRef.current.scrollLeft= startX - e.pageX;

    // if (scrollLeft === 0) {
    //   setStartX(e.pageX);
    // } else if (scrollWidth <= clientWidth + scrollLeft) {
    //   setStartX(e.pageX + scrollLeft);
    // }
  }
  
  return (
    <Calendar.List 
      ref={scorllRef}
      // onMouseDown={onDragStart}
      // onMouseLeave={onDragEnd}
      // onDragMove={onDragMove}
    >
      {calendar.map((el) => {
        return (
        <Calendar.Item 
          key={el.date.format('MM.DD')}
          today={el.date.format('YYYY.MM.DD') === moment().format('YYYY.MM.DD')}
        >
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
  )
}

export default CalendarView;