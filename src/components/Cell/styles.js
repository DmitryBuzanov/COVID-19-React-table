import styled from "styled-components";

const colors = {
  confirmed: ({ theme }) => theme.greyText,
  active: ({ theme }) => theme.lightBlue,
  recovered: ({ theme }) => theme.diamondText,
  death: ({ theme }) => theme.lightRedText,
};

export const Info = styled.span`
  color: ${({ type }) => colors[type]};
`;
