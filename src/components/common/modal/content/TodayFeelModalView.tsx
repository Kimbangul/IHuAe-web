import { useState } from 'react';
import styled from 'styled-components';

const TodayFeelModalView = () => {
  return (
    <div className='Modal__inner'>
      <div className='Modal__close-container'></div>
      <Modal.Text>오늘은 어떤 기분이 드나요?</Modal.Text>
      <Modal.List.Container>
        <li className=''></li>
      </Modal.List.Container>
      <Modal.Input type='text' placeholder='추가로 느끼는 감정을 작성해보세요' />
      <Modal.Button>선택 완료</Modal.Button>
    </div>
  );
};

const TodayFeelModalItemView: React.FC<FeelItemPropType> = ({ title, img }) => {
  return <li>{title}</li>;
};

//COMPONENT style
const Modal = {
  Text: styled.div`
    text-align: center;
    color: ${({ theme }) => theme.color.text.text_09};
    font-size: 1.4rem;
    margin-top: 1.1rem;
  `,
  List: {
    Container: styled.ul`
      margin-top: 2.5rem;
    `,
  },
  Input: styled.input`
    width: 100%;
    padding: 1.2rem 1rem;
    border: 0.1rem solid #b3b3b3;
    border-radius: 1rem;
    font-size: 1.4rem;
    &::placeholder {
      color: #b3b3b3;
    }
  `,
  Button: styled.button`
    display: block;
    color: ${({ theme }) => theme.color.main.main};
    border: 0.12rem solid ${({ theme }) => theme.color.main.main};
    background: ${({ theme }) => theme.color.white};
    border-radius: 0.5rem;
    padding: 0.6rem 1.8rem;
    margin: 0 auto;
    margin-top: 2.3rem;
    cursor: pointer;
    font-size: 1.2rem;
    ${(props) => props.theme.font.sans.medium};
  `,
};

// PARAM type
interface FeelItemPropType {
  title: string;
  img: string;
}

export default TodayFeelModalView;
