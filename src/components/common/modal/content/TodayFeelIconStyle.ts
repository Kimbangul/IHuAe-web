import styled from "styled-components";

// COMPONENT style
const TodayFeel = {
  Item: styled.li`
    display: flex;
    padding: 1rem 0;
    cursor: pointer;
    position: relative;
  `,
  Button: styled.button`
    display: inline-block;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  Icon: styled.div<{ width: string; height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  `,
  Cursor: styled.div`
    display: block;
    pointer-events: none;
    border: 0.2rem solid ${({ theme }) => theme.color.main.main};
    background: rgba(130, 145, 230, 0.1);
    border-radius: 0.5rem;
    width: 6.5rem;
    height: 7.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  `,
  Text: styled.span`
    display: inline-block;
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.color.text.text_10};
    ${({ theme }) => theme.font.sans.regular};
  `,
};

export default TodayFeel;