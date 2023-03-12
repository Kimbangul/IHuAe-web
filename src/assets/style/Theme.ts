import { css } from 'styled-components';

const color = {
  main: {
    main: '#8291E6',
    secondary: '#A2AFF8',
    third: '#D8E0F3',
  },
  text: {
    text_01: '#D9D9D9',
    text_02: '#C4C4C4',
    text_03: '#BEBEBE',
    text_04: '#A8A8A8',
    text_05: '#9A9A9A',
    text_06: '#888888',
    text_07: '#7A7A7A',
    text_08: '#6D6D6D',
    text_09: '#4A4A4A',
    text_10: '#000000',
  },
  bg: {
    bg_01: '#F5F8FD',
  },
};

const layout = {
  headerHeight: '50px',
};

const font = {
  sans: {
    light: css`
      font-family: 'SpoqaHanSansNeo-Light';
      font-weight: 200;
    `,
    regular: css`
      font-family: 'SpoqaHanSansNeo-Regular';
      font-weight: 400;
    `,
    medium: css`
      font-family: 'SpoqaHanSansNeo-Medium';
      font-weight: 500;
    `,
    bold: css`
      font-family: 'SpoqaHanSansNeo-Bold';
      font-weight: 600;
    `,
  },
};

export { color, layout, font };
