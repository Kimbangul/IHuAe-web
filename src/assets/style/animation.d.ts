import { ThemedCssFunction } from 'styled-components';

interface baseAniParamType {
  name: string;
  duration: string;
}

interface fadeInParamType extends baseAniParamType {
  direction?: string;
  count?: string;
}
