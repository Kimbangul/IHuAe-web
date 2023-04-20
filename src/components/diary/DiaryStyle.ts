import styled, { css } from 'styled-components';

const Diary = {
  Wrap: styled.div`
    height: 100%;
    background: ${({ theme }) => theme.color.bg.bg_01};
  `,
  Title: styled.h2`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.text.text_09};
    ${({ theme }) => theme.font.sans.bold};
  `,
  Inquiry: {
    Container: styled.section`
      margin-top: 2.7rem;
      padding: 0 2rem;
    `,
    Content: styled.div`
      padding: 1.8rem 2rem;
      border-radius: 0.5rem;
      margin-top: 1rem;
      background: linear-gradient(180deg, #eedaff 0%, rgba(239, 231, 246, 0.0260417) 99.98%, rgba(238, 225, 250, 0.447917) 99.99%, rgba(239, 231, 246, 0) 100%);
      border: 1px solid #ebdff4;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    TextBox: styled.div`
      color: #c5a0d9;
      ${({ theme }) => theme.font.sans.medium};
    `,
    Number: styled.span`
      font-size: 1.6rem;
      ${({ theme }) => theme.font.sans.bold};
    `,
    Desc: styled.p`
      margin-top: 1.5rem;
    `,
    Button: styled.button`
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 100%;
      font-size: 1.2rem;
      color: #caa9dd;
      cursor: pointer;
      background: ${({ theme }) => theme.color.white};
      ${({ theme }) => theme.font.sans.medium};
    `,
  },
  Diary: {
    Container: styled.section`
      padding: 0 2rem;
      margin-top: 2.4rem;
    `,
    List: styled.ul`
      margin-top: 1.4rem;
    `,
    Item: styled.li`
      border-radius: 0.4rem;
      border: 0.1rem solid #ececec;
      padding: 1.8rem 2rem;
      cursor: pointer;
      background: ${({ theme }) => theme.color.white};
    `,
    ItemDesc: styled.p`
      font-size: 1.2rem;
      margin-top: 1.6rem;
      color: ${({ theme }) => theme.color.text.text_05};
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      ${({ theme }) => theme.font.sans.medium};
    `,
    Title: styled.h3`
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.text.text_07};
      ${({ theme }) => theme.font.sans.medium};
    `,
    TitleContainer: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    Delete: styled.button`
      cursor: pointer;
      font-size: 1rem;
      color: ${({ theme }) => theme.color.text.text_09};
      ${({ theme }) => theme.font.sans.medium};
    `,
  },
  Button: styled.button`
    width: 4.8rem;
    height: 4.8rem;
    cursor: pointer;
    font-size: 4rem;
    border-radius: 100%;
    position: fixed;
    right: 2rem;
    bottom: 8rem;
    box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.16);
    background: ${({ theme }) => theme.color.main.main};
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.sans.bold}
  `,
};

export const Calendar = {
  Container: styled.section`
    background: ${({ theme }) => theme.color.white};
    padding: 1.1rem 2rem;
    padding-bottom: 2rem;
    position: relative;
    z-index: 2;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.14);
  `,
  List: styled.ul`
    display: flex;
    width: 100%;
    overflow-x: hidden;
    margin-top: 2rem;
  `,
  Item: styled.li<{ today: boolean }>`
    color: ${({ theme }) => theme.color.text.text_08};
    padding: 0 2rem;
    ${({ today }) =>
      today &&
      css`
        color: #2d2d2d;
        ${({ theme }) => theme.font.sans.bold};
      `};
  `,
  DDay: styled.span`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.text.text_09};
    ${({ theme }) => theme.font.sans.bold};
  `,
};

export default Diary;
