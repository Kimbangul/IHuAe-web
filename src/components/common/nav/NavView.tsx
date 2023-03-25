import styled, { css } from 'styled-components';
import Link from 'next/link';
import { NavViewPropsType, NavItemPropsType } from './NavType';

// COMPONENT navigation view
const NavView: React.FC<NavViewPropsType> = ({ menu, activeMenu }) => {
  return (
    <Nav.Container className='Nav__container'>
      <Nav.Inner className='Nav__iist'>
        {menu.map((el) => {
          return <NavItemView key={el.title} {...el} active={activeMenu === el.title} />;
        })}
      </Nav.Inner>
    </Nav.Container>
  );
};

// COMPONENT nav item
const NavItemView: React.FC<NavItemPropsType> = ({ link, title, icon, active }) => {
  return (
    <Nav.Item className='Nav__item' active={active}>
      <Link href={link}>{icon}</Link>
    </Nav.Item>
  );
};

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

export default NavView;
