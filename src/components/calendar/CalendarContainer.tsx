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



  const [calendarInfo, setCalendarInfo] = useReducer(calendarReducer, initialCalendarState);



  return <CalendarView year={calendarInfo.year} month={calendarInfo.month} setCalendarInfo={setCalendarInfo}/>
}


export default CalendarContainer;