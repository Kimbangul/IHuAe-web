import moment from "moment";
import { DateInfo } from "@/components/calendar/makeCalendar";

const makeDiaryCalendar = (initialDay: moment.Moment) => {
  // const endDay = moment(initialDay).add(30, 'days');
  const calenderArr : DateInfo[] = [];

  for (let i = 0; i<=30; i++){
    let day = moment(initialDay).add(i, 'days');
    calenderArr.push(new DateInfo(day, false));
  }

  return calenderArr;
}

export default makeDiaryCalendar;