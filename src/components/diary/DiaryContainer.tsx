import moment from 'moment';
import client from '@/axios/client';
import DiaryView from "./DiaryView";
import makeDiaryCalendar from './makeDiaryCalendar';
import { useEffect } from 'react';

const DiaryContainer = () => {
  const initialDate = moment().startOf('day');
  const calendar = makeDiaryCalendar(initialDate);


  useEffect(()=>{
    client.post('/today_feeling', {
      test: 'test data',
      test2: 'test data 2'
    });
  }, []);


  return <DiaryView calendar={calendar}/>
}

export default DiaryContainer;