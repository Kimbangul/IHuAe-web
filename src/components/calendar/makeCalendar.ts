import moment from 'moment';
import leftPad from '@/utils/leftPad';

const makeMonthCalendar = (year: number, month: number) => {
  // PARAM 이번 달 마지막 날짜
  const lastDate = moment().endOf('month'); // .format('DD')
  // PARAM 이번 달 첫번째 날짜 요일
  const firstDay = moment().startOf('month').day();

  const calenderArr = [];
  let weekArr = Array(7).fill('');
  let dayIndex = firstDay;

  // 이전 달 날짜 출력
  if (dayIndex !== 0) {
    let lastMonthLastDate = lastDate.subtract('days', 1);
  }
};

export default makeMonthCalendar;
