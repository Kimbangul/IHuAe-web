import moment from 'moment';
import DiaryView from "./DiaryView";
import makeDiaryCalendar from './makeDiaryCalendar';

const DiaryContainer = () => {
  const initialDate = moment().startOf('day');
  const calendar = makeDiaryCalendar(initialDate);

  console.log(calendar);

  return <DiaryView calendar={calendar}/>
}

export default DiaryContainer;