import { ReactNode } from 'react';

export interface NavItemBaseType {
  link: string;
  title: string;
  icon: ReactNode;
}

export interface NavItemPropsType extends NavItemBaseType {
  active: boolean;
}

export interface NavViewPropsType {
  menu: NavItemBaseType[];
  activeMenu: string;
}
