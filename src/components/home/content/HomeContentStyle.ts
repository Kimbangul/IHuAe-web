import styled, {css} from "styled-components";
import { DirectionType } from "./HomeContentType";

// COMPONENT style
export const HomeContent = {
  Container: styled.div`
    padding: 2.4rem 3.2rem;
    position: relative;
  `,
};
export const Card = {
  Container: styled.div`
    width: 100%;
    position: relative;

    span {
      position: unset !important;
    }

    img {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  `,
};
export const NavBtn = {
  Container: styled.button<{ direction: DirectionType }>`
    position: absolute;
    width: 1.3rem;
    height: 1.8rem;
    top: 50%;
    left: 0.9rem;
    transform: translateY(-50%);

    ${({ direction }) =>
      direction === "prev"
        ? null
        : css`
            left: unset;
            right: 0.9rem;
            transform: translateY(-50%) rotate(180deg);
          `};
  `,
};