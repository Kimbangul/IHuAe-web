import { Dispatch, ReactNode } from "react";

export interface CalendarInfoType {
  year: number,
  month: number,  
}

export interface CalendarActionType {
  type: 'INCREASE_YEAR' | 'DECREASE_YEAR' | 'INCREASE_MONTH' | 'DECREASE_MONTH'
}

export interface CalendarViewParamType extends CalendarInfoType {
  setCalendarInfo: Dispatch<CalendarActionType>;
  onClickTodayFeel: () => void;
  feelIcon: null | ReactNode;
  feelState: string;
  feelDesc: string;
}