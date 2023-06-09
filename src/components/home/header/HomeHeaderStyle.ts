import styled from "styled-components";

const Header = {
  Container: styled.header`
    padding: 1.8rem 2rem 3rem 2rem;
    border-radius: 0 0 1.6rem 1.6rem;
    background: #fff;
    position: relative;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.14);
  `,
  Today: {
    Container: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    Date: styled.h1`
      color: ${({ theme }) => theme.color.main.main};
      font-size: 2.4rem;
    `,
    Desc: styled.div`
      display: flex;
      gap: 1.5rem;
      align-items: center;
      color: ${({ theme }) => theme.color.main.main};
      font-weight: 600;
      font-size: 1.2rem;
      cursor: pointer;
    `,
    Icon: styled.span<{ feelStyle: null | string }>`
      display: inline-block;
      border-radius: 100%;
      width: 2.7rem;
      height: 2.7rem;
      ${(props) => props.feelStyle};
    `,
  },
  Qusetion: {
    Container: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6.2rem;
    `,
    Desc: styled.p`
      color: ${({ theme }) => theme.color.main.main};
      font-size: 1.5rem;
      font-weight: 500;
    `,
    Button: styled.button`
      cursor: pointer;
      background: ${({ theme }) => theme.color.main.main};
      color: ${({ theme }) => theme.color.white};
      border-radius: 0.5rem;
      padding: 0.6rem 1.8rem;
      font-family: 'SpoqaHanSansNeo', sans-serif;
      box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.25);
      font-size: 1.2rem;
    `,
  },
};

export default Header;