import styled from "styled-components";

const Modal = {
  Text: styled.div`
    text-align: center;
    color: ${({ theme }) => theme.color.text.text_09};
    font-size: 1.4rem;
    margin-top: 1.1rem;
  `,
  List: {
    Container: styled.ul`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1.2rem 0;
      justify-content: space-between;
      padding: 0 0.6rem;
      margin-top: 2.5rem;
    `,
  },
  Input: styled.input`
    width: 100%;
    padding: 1.2rem 1rem;
    border: 0.1rem solid #b3b3b3;
    border-radius: 1rem;
    font-size: 1.4rem;
    margin-top: 3.7rem;
    &::placeholder {
      color: #b3b3b3;
    }
  `,
  Close: {
    Btn: styled.button`
      width: 1.7rem;
      height: 1.8rem;
      display: block;
      margin-left: auto;
      margin-right: 0;
      cursor: pointer;
    `,
  },
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

export default Modal;