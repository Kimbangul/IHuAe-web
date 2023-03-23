import { useState } from 'react';

const TodayFeelModalView = () => {
  return (
    <div className='Modal__inner'>
      <div className='Modal__close-container'></div>
      <p>오늘은 어떤 기분이 드나요?</p>
      <ul>
        <li className=''></li>
      </ul>
      <input type='text' />
      <button>선택 완료</button>
    </div>
  );
};

const TodayFeelModalItemView: React.FC<FeelItemPropType> = ({ title, img }) => {
  return <li>{title}</li>;
};

// PARAM type
interface FeelItemPropType {
  title: string;
  img: string;
}

export default TodayFeelModalView;
