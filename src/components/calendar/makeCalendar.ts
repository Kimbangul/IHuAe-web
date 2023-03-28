import moment from 'moment';
import leftPad from '@/utils/leftPad';

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
  const lastDate = moment().endOf('month'); // .format('DD')
  // PARAM 이번 달 첫번째 날짜 요일
  const firstDay = moment().startOf('month'); //.day();

  const calenderArr = [];
  let weekArr: DateInfo[] = Array(7).fill('');
  let dayIndex = firstDay.day();

  // 이전 달 날짜 출력
  if (dayIndex !== 0) {
    let lastMonthLastDate = firstDay.subtract('days', 1);

    for (let i = dayIndex - 1; i >= 0; i--) {
      weekArr[i] = new DateInfo(lastMonthLastDate, false);
      console.log(weekArr[i].date.format('MM.DD'));
    }

    lastMonthLastDate = lastMonthLastDate.subtract('days', 1);
  }

  // 이번 달 날짜 출력
  for (let date = 1; date < Number(lastDate.format('DD')); date++) {
    let day = firstDay.add('days', date);
    weekArr[dayIndex] = new DateInfo(day, false);
    console.log(weekArr[dayIndex].date.format('MM.DD'));

    // 다음 달 날짜 출력
    if (date === lastDate.day()) {
      let nextMonthDate = lastDate.add('days', 1);
      for (let i = lastDate.day() + 1; i <= 6; i++) {
        weekArr[dayIndex] = new DateInfo(nextMonthDate, false);
      }
      nextMonthDate = nextMonthDate.add('days', 1);
    }

    if (dayIndex === 6) {
      // week 배열이 다 찼을 경우 calendarArr에 push하고 week 배열 초기화
      calenderArr.push(weekArr);
      weekArr = Array(7).fill('');
      dayIndex = 0;
      break;
    }
    dayIndex++;
  }
  return calenderArr;
};

export default makeMonthCalendar;
