import Header from '@/components/common/Header';

const DiaryView = () => {
  return (
    <div>
      <Header title='기록'/>
      <section>
        <span>D+DAY</span>
      </section>
      <section>
        <h2>오늘의 문답</h2>
        <div>
         <div>
           <span>Q.1</span>
           <p>문답내용</p>
         </div>
         <button>기록하기</button>
        </div>
      </section>
      <section>
        <h2>오늘의 기록</h2>
        <ul>
          <li>
            <div>
              <h3>제목</h3>
              <button>삭제</button>
            </div>
            <p>내용 텍스트 내용 텍스트 내용 텍스트</p>
          </li>
        </ul>
      </section>
      <button>
        +
      </button>
    </div>
  )
}

export default DiaryView;