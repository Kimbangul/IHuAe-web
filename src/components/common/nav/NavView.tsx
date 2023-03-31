import styled, { css } from 'styled-components';
import Link from 'next/link';
import { NavViewPropsType, NavItemPropsType } from './NavType';
import Nav from './NavStyle';

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


export default NavView;
