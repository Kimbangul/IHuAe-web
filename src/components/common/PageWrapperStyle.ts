import styled from "styled-components";

// COMPONENT style
const Page = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  `,
  Inner: styled.div`
    flex-grow: 1;
    overflow-y: scroll;
  `,
};

export default Page;