import { createGlobalStyle } from 'styled-components';

export const FontStyle = createGlobalStyle`
@font-face {
  font-family: 'SpoqaHanSansNeo';
  font-style: normal;
  font-weight: 400;
  src: url('../../../src/assets/fonts/SpoqaHanSansNeo-Regular.ttf') format("truetype");
}

@font-face {
  font-family: 'SpoqaHanSansNeo';
  font-style: normal;
  font-weight: 500;
  src: url('../../../src/assets/fonts/SpoqaHanSansNeo-Medium.ttf') format("truetype");
}

@font-face {
  font-family: 'SpoqaHanSansNeo';
  font-style: normal;
  font-weight: 600;
  src: url('../../../src/assets/fonts/SpoqaHanSansNeo-Bold.ttf') format("truetype");
}

@font-face {
  font-family: 'GmarketSans';
  font-style: normal;
  font-weight: 400;
  src: url('../../../src/assets/fonts/GmarketSansTTFLight.ttf') format("truetype");
}

@font-face {
  font-family: 'GmarketSans';
  font-style: normal;
  font-weight: 500;
  src: url('../../../src/assets/fonts/GmarketSansTTFMedium.ttf') format("truetype");
}

@font-face {
  font-family: 'GmarketSans';
  font-style: normal;
  font-weight: 600;
  src: url('../../../src/assets/fonts/GmarketSansTTFBold.ttf') format("truetype");
}
`;
