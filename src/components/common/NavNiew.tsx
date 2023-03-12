import styled from 'styled-components';
import Link from 'next/link';

// COMPONENT navigation view
const NavView = () => {
  return (
    <Nav.Container className='Nav__container'>
      <Nav.Inner className='Nav__iist'>
        <NavItemView />
        <NavItemView />
        <NavItemView />
        <NavItemView />
      </Nav.Inner>
    </Nav.Container>
  );
};

// COMPONENT nav item
const NavItemView = () => {
  return (
    <Nav.Item className='Nav__item'>
      <Link href='#'>icon here</Link>
    </Nav.Item>
  );
};

// PARAM style
const Nav = {
  Container: styled.nav`
    width: 100%;
    height: 7rem;
    background-color: ${({ theme }) => theme.color.white};
  `,
  Inner: styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0 3.2rem;
    align-items: center;
    height: 100%;
  `,
  Item: styled.li`
    & > a {
      width: 4rem;
      height: 4rem;
    }
  `,
};

export default NavView;
