import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  color: inherit;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;

  ::selection {
    background: $purple_01;
    color: #fff;
  }

  ::-webkit-selection {
    background: $purple_01;
    color: #fff;
  }

  ::-moz-selection {
    background: $purple_01;
    color: #fff;
  }
}

html {
  font-size: 62.5%;
  transition: font-size 0.3s;

  /* @media (max-width: 361px) {
    font-size: 50% !important;

  }

  @media (max-width: 300px) {
    font-size: 46% !important;
  } */
}

body {
  font-family: 'Pretendard', 'Poppins', 'sans-serif';
  font-size: 1.4rem;
  min-width: 280px;
}


a,
img {
  display: block;
}

button {
  appearance: none;
  border: none;
  background: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', 'Pretendard', 'sans-serif';
}

input {
  &:focus {
    outline: none;
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

#__next {
  overflow: hidden;
  min-height: 100vh;
  position: relative;
}
`;
