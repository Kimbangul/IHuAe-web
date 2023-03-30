import moment from 'moment';
import {chunkArr} from '@/utils';

// CLASS 날짜 정보 생성자
export class DateInfo {
  date: moment.Moment;
  currentMonth: boolean;

  constructor(date: moment.Moment, currentMonth: boolean) {
    this.date = date;
    this.currentMonth = currentMonth;
  }
}


const makeMonthCalendar = (year: number, month: number) => {
  // PARAM 이번 달 마지막 날짜
  const lastDate = moment(`${year}.${month}.01`).endOf('month').startOf('days'); // .format('DD')
  // PARAM 이번 달 첫번째 날짜 요일
  const firstDate = moment(`${year}.${month}.01`).startOf('month').startOf('days'); //.day();

  const calenderArr: DateInfo[] = [];
  let result : DateInfo[][];
  let dayIndex = firstDate.day();

  const addCalendar = (baseDate: moment.Moment, addDate: number, isCurrentMonth: boolean) => {
    let day = moment(baseDate).add('days', addDate);
    calenderArr.push(new DateInfo(day, isCurrentMonth));
  };

  // FUNCTION 지난달 날짜 구하기
  for (let i = dayIndex; i > 0; i--) {
    addCalendar(firstDate, -i, false);
  }

  // FUNCTION 이번달 날짜 구하기
  for (let i = 0; i <= Number(lastDate.format('DD')) - 1; i++) {
    addCalendar(firstDate, i, true);
  }

  // FUNCTION 다음달 날짜 구하기
  for (let i = 1; i <= 6 - lastDate.day(); i++) {
    addCalendar(lastDate, i, false);
  }

  result = chunkArr(calenderArr, 7);
  return result;
};

// PARAM type
interface addCalendarParamType {
  baseDate: moment.Moment;
  addDate: number;
  isCurrentMonth: boolean;
}

export default makeMonthCalendar;
