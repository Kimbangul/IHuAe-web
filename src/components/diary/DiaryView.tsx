import Router from 'next/router';
import Header from '@/components/common/Header';
import { DiaryViewParamType } from './DiaryType';
import Diary, { Calendar } from './DiaryStyle';
import Link from 'next/link';

const DiaryView = ({ calendar }: DiaryViewParamType) => {
  return (
    <Diary.Wrap>
      <Header title='기록' />
      <Calendar.Container>
        <span>D+DAY</span>
        <Calendar.List>
          {calendar.map((el) => {
            return <Calendar.Item>{el.date.format('D')}</Calendar.Item>;
          })}
        </Calendar.List>
      </Calendar.Container>
      <Diary.Inquiry.Container>
        <Diary.Title>오늘의 문답</Diary.Title>
        <Diary.Inquiry.Content>
          <Diary.Inquiry.TextBox>
            <Diary.Inquiry.Number>Q.1</Diary.Inquiry.Number>
            <Diary.Inquiry.Desc>문답내용</Diary.Inquiry.Desc>
          </Diary.Inquiry.TextBox>
          <Diary.Inquiry.Button onClick={() => Router.push(`/diary/ask/1`)}>기록하기</Diary.Inquiry.Button>
        </Diary.Inquiry.Content>
      </Diary.Inquiry.Container>
      <Diary.Diary.Container>
        <Link href={`/diary/detail/1`}>
          <Diary.Title>오늘의 기록</Diary.Title>
          <Diary.Diary.List>
            <Diary.Diary.Item>
              <Diary.Diary.TitleContainer>
                <Diary.Diary.Title>제목</Diary.Diary.Title>
                <Diary.Diary.Delete>삭제</Diary.Diary.Delete>
              </Diary.Diary.TitleContainer>
              <Diary.Diary.ItemDesc>내용 텍스트 내용 텍스트 내용 텍스트</Diary.Diary.ItemDesc>
            </Diary.Diary.Item>
          </Diary.Diary.List>
        </Link>
      </Diary.Diary.Container>
      <Diary.Button>+</Diary.Button>
    </Diary.Wrap>
  );
};

export default DiaryView;
