import moment from "moment";
import {  useReducer, useState } from "react";
import { CalendarInfoType, CalendarActionType } from "./CalendarType";
import CalendarView from "./CalendarView"

const CalendarContainer = () => {
  // PARAM state
  const initialCalendarState = {
    year: moment().year(),
    month: moment().month() + 1,
  };

  const calendarReducer = (state : CalendarInfoType, action : CalendarActionType) => {
    switch(action.type){ 
      case 'INCREASE_YEAR':      
        return {...state, year: state.year + 1}
      case 'DECREASE_YEAR':
        return {...state, year: state.year - 1}
      case 'INCREASE_MONTH':
        return {...state, month: state.month + 1}
      case 'DECREASE_MONTH':
        return {...state, month: state.month - 1}               
    }
  }



  const [calendarInfo, setCalendarInfo] = useReducer(calendarReducer, initialCalendarState);



  return <CalendarView year={calendarInfo.year} month={calendarInfo.month} setCalendarInfo={setCalendarInfo}/>
}


export default CalendarContainer;