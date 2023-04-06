import Header from '@/components/common/Header';

const AskView = () => {
  return (
    <div>
      <Header title='나의 기록' back={true} menu={AskViewMenu()} />
      <section>
        <div>
          <span></span>
          <h2>X와 어떻게 헤어졌는지 자세히 말해줄래요?</h2>
        </div>
      </section>
      <div></div>
      <div>0 / 1000자</div>
    </div>
  );
};

const AskViewMenu = () => {
  return <button>작성 완료</button>;
};

export default AskView;
