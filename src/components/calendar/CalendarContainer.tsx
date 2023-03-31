import moment from "moment";
import {  useReducer, useState, useEffect, ReactNode, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType, indexAction } from '@/redux';
import { CalendarInfoType, CalendarActionType } from "./CalendarType";
import TodayFeelModalView from '@/components/common/modal/content/TodayFeelModalView';
import CalendarView from "./CalendarView";
import { getFeelIcon } from "@/utils";


const CalendarContainer = () => {
  const rootState = useSelector((state: RootStateType) => state);
  const dispatch = useDispatch();

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

  // FUNCTION 모달 열기
  const onClickTodayFeel = () => {
    dispatch(indexAction.setModalContent(
      <>
        <TodayFeelModalView />
      </>
    ))
  }
  
  // PARAM state, reducer
  const [calendarInfo, setCalendarInfo] = useReducer(calendarReducer, initialCalendarState);
  const [feelState, setFeelState] = useState('오늘은 어떤 기분이 드나요?');
  const [feelIcon, setFeelIcon] = useState<null | ReactNode>(null);


  // PARAM 오늘의 기분상태
  const todayFeelDesc = useMemo(()=>{
    return rootState.content.todayFeelDesc !=='' ? rootState.content.todayFeelDesc : '(기분에 대해서 기록해보세요)'
  }, [rootState.content.todayFeelDesc]);

  // FUNCTION 오늘의 기분 문구
  useEffect(() => {
    switch (rootState.content.todayFeel) {
      case '':
      case null:
        setFeelState('오늘은 어떤 기분이 드나요?');
        break;
      case '평온':
        setFeelState('오늘은 평온함');
        setFeelIcon(getFeelIcon('평온').imgSrc)
        break;
      case '무덤덤':
        setFeelState('오늘은 무덤덤함');
        setFeelIcon(getFeelIcon('무덤덤').imgSrc);
        break;
      case '슬픔':
        setFeelState('오늘은 슬픔');
        setFeelIcon(getFeelIcon('슬픔').imgSrc);
        break;
      case '분노':
        setFeelState('오늘은 화남');
        setFeelIcon(getFeelIcon('분노').imgSrc);
        break;
      case '만족':
        setFeelState('오늘은 만족스러움');
        setFeelIcon(getFeelIcon('만족').imgSrc);
        break;
      case '공허함':
        setFeelState('오늘은 공허함');
        setFeelIcon(getFeelIcon('공허함').imgSrc);
        break;
    }
  }, [rootState.content.todayFeel]);
  

  return (
    <CalendarView 
    year={calendarInfo.year} 
    month={calendarInfo.month}
    setCalendarInfo={setCalendarInfo}
    feelIcon= {feelIcon}
    feelState= {feelState}
    feelDesc={todayFeelDesc}
    onClickTodayFeel={onClickTodayFeel}
   />
   )
}


export default CalendarContainer;