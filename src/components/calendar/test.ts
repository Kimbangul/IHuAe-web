import moment from 'moment';

// FUNCTION 이번 달 마지막 날짜
test('last date', () => {
  const lastDate = moment().endOf('month');
  expect(lastDate.format).toBe(moment(new Date(2023, 2 + 1, 0)).format);
});

// FUNCTION 이번 달 첫번째 날짜 요일
test('first Day', () => {
  const firstDay = moment().startOf('month').day();
  const firstDay2 = new Date(2023, 2, 1).getDay();

  expect(firstDay).toBe(firstDay2);
});

// FUNCTION 이전 달 마지막 날짜
// test('lat date of last month', () => {
//   const firstDay = moment().startOf('month');
//   const lastMonthLastDate = firstDay.subtract('days', 1);
//   const lastMonthLastDate2 = String(new Date(2023, 1, 28));

//   expect(lastMonthLastDate2).toBe(lastMonthLastDate);
// });

// FUNCTION 타입 체크
test('get moment type', () => {
  let lastMonthLastDate = moment().startOf('month').subtract('days', 1);

  expect(typeof lastMonthLastDate).toBe('object');
});

// FUNCTION 날짜 빼기 체크
test('check subtract', () => {
  const beforeTwoDay = moment().subtract('days', 1).subtract('days', 1);
  const beforeTwoDay2 = moment().subtract('days', 2);

  expect(beforeTwoDay).toStrictEqual(beforeTwoDay2);
});

// 날짜 변환 체크
test('check subtract', () => {
  const lastDate = moment().endOf('month');
  const lastDateToString = Number(lastDate.format('DD'));

  expect(lastDateToString).toBe(31);
});


test('test type', ()=>{
  expect(moment().month()).toBe(3)
})