import moment from 'moment';
import leftPad from '@/utils/leftPad';
import { current } from '@reduxjs/toolkit';

// CLASS 날짜 정보 생성자
class DateInfo {
  date: moment.Moment;
  currentMonth: boolean;

  constructor(date: moment.Moment, currentMonth: boolean) {
    this.date = date;
    this.currentMonth = currentMonth;
  }
}

const makeMonthCalendar = (year: number, month: number) => {
  // PARAM 이번 달 마지막 날짜
  const lastDate = moment().endOf('month'); // .format('DD')
  // PARAM 이번 달 첫번째 날짜 요일
  const firstDay = moment().startOf('month'); //.day();

  const calenderArr = [];
  let weekArr = Array(7).fill('');
  let dayIndex = firstDay.day();

  // 이전 달 날짜 출력
  if (dayIndex !== 0) {
    let lastMonthLastDate = firstDay.subtract('days', 1);

    for (let i = dayIndex - 1; i >= 0; i--) {
      weekArr[i] = new DateInfo(lastMonthLastDate, false);
    }

    lastMonthLastDate = lastMonthLastDate.subtract('days', 1);
  }

  // 이번 달 날짜 출력
  for (let date = 1; date < Number(lastDate.format('DD')); date++) {
    let day = firstDay.add('days', date);
    weekArr[dayIndex] = new DateInfo(day, false);

    if (dayIndex === 6) {
      break;
    }
    // 마지막 인덱스일 경우
    if (date === lastDate.day()) {
      for (let i = lastDate.day() + 1; i <= 6; i++) {
        let nextMonthDate = lastDate.add('days', i);
        weekArr[dayIndex] = new DateInfo(nextMonthDate, false);
      }
    }
  }
};

export default makeMonthCalendar;
