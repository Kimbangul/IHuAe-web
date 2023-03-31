import styled, { css } from 'styled-components';

// COMPONENT style
const Nav = {
  Container: styled.nav`
    width: 100%;
    height: 7rem;
    background-color: ${({ theme }) => theme.color.white};
    flex-shrink: 0;
  `,
  Inner: styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0 3.2rem;
    align-items: center;
    height: 100%;
  `,
  Item: styled.li<{ active: boolean }>`
    & > a {
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
    }
    path {
      ${({ active }) =>
        active
          ? css`
              fill: ${({ theme }) => theme.color.main.main};
            `
          : css`
              fill: ${({ theme }) => theme.color.text.text_01};
            `};
    }
  `,
};

export default Nav;