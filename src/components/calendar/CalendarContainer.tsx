import moment from "moment";
import {  useReducer, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootStateType } from '@/redux';
import { CalendarInfoType, CalendarActionType } from "./CalendarType";
import CalendarView from "./CalendarView";


const CalendarContainer = () => {
  const rootState = useSelector((state: RootStateType) => state);

  // PARAM calendar initial state
  const initialCalendarState = {
    year: moment().year(),
    month: moment().month() + 1,
  };
  // FUNCTION calendar reducer
  const calendarReducer = (state : CalendarInfoType, action : CalendarActionType) => {
    let newYear : number;
    let newMonth : number;

    switch(action.type){ 
      case 'INCREASE_YEAR': 
        return {...state, year: state.year + 1}
      case 'DECREASE_YEAR':
        return {...state, year: state.year - 1}
      case 'INCREASE_MONTH':
        newMonth = state.month + 1;
        newYear = state.year;
        if (newMonth > 12) {          
          newMonth = 1;
          newYear = newYear + 1;
        }
        return {year: newYear, month: newMonth}
      case 'DECREASE_MONTH':
        newMonth = state.month - 1;
        newYear = state.year;
        if (newMonth < 1){
          newMonth = 12;
          newYear = newYear - 1;
        }
        return {year: newYear, month: newMonth}               
    }
  }
  
  // PARAM state, reducer
  const [calendarInfo, setCalendarInfo] = useReducer(calendarReducer, initialCalendarState);
  const [feelState, setFeelState] = useState('오늘의 기분을 표현해보세요');
  const [feelStyle, setFeelStyle] = useState<null | string>(null);

  // FUNCTION 오늘의 기분 문구
  useEffect(() => {
    switch (rootState.content.todayFeel) {
      case '':
      case null:
        setFeelState('오늘의 기분을 표현해보세요');
        setFeelStyle(`border: 0.2rem dashed`);
        break;
      case '평온':
        setFeelState('오늘의 기분은 평온해요');
        setFeelStyle(`background: #FAD556`);
        break;
      case '무덤덤':
        setFeelState('오늘의 기분은 무덤덤해요');
        setFeelStyle(`background: #7C6CBB`);
        break;
      case '슬픔':
        setFeelState('오늘의 기분은 슬퍼요');
        setFeelStyle(`background: #AED1E4`);
        break;
      case '분노':
        setFeelState('오늘의 기분은 화나요');
        setFeelStyle(`background: #FF6060`);
        break;
      case '만족':
        setFeelState('오늘의 기분은 만족스러워요');
        setFeelStyle(`background: #A3E4A1`);
        break;
      case '공허함':
        setFeelState('오늘의 기분은 공허해요');
        break;
    }
  }, [rootState.content.todayFeel]);

  return <CalendarView year={calendarInfo.year} month={calendarInfo.month} setCalendarInfo={setCalendarInfo}/>
}


export default CalendarContainer;