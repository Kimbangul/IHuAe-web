import styled from 'styled-components';

const BaseBtn = styled.button`
  display: inline-block;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.text.text_09};
  ${({ theme }) => theme.font.sans.regular};
  position: relative;
  padding: 0 4rem;
  cursor: pointer;
  &::after {
    display: block;
    content: '';
    width: 0.1rem;
    height: 3rem;
    background: #d1caca;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`;
const Alert = {
  Text: styled.p`
    font-size: 1.6rem;
    text-align: center;
    margin-top: 1.2rem;
    color: ${({ theme }) => theme.color.text.text_09};
    ${({ theme }) => theme.font.sans.regular};
  `,
  Btn: {
    Container: styled.button`
      display: flex;
      margin: 0 auto;
      margin-top: 3.6rem;
      margin-bottom: 1.2rem;
    `,
    DefaultBtn: styled(BaseBtn)``,
    PointBtn: styled(BaseBtn)`
      color: ${({ theme }) => theme.color.main.main};
    `,
  },
};

export default Alert;
