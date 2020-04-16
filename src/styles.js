import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  @media screen and (max-width: 554px) {
    padding: 0 20px;
  }
`;
