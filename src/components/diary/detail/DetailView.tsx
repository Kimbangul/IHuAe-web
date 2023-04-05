import Header from '@/components/common/Header';

const DetailView = () => {
  return(
    <div>
      <Header title='나의 기록' back={true} menu={DetailViewMenu()}/>
      <section className='inner'>

      </section>
    </div>
  )
}

const DetailViewMenu = () => {
  return(
    <ul>
    {/* position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex; */}
      <li>
        수정
      </li>
      <li>
        삭제
      </li>
    </ul>
  )
}

export default DetailView;