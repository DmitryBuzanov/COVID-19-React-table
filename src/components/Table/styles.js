import styled, { css } from "styled-components";

export const Container = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.white};
`;

export const Body = styled.tbody``;

export const Head = styled.thead``;

export const HeaderRow = styled.tr``;

export const Row = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.divider};
  :last-child {
    border-bottom: none;
  }
`;

const cellStyles = css`
  padding: 30px 15px;
  text-align: ${({ align }) => align || "left"};
  min-width: ${({ minWidth }) => minWidth}px;
  max-width: ${({ maxWidth }) => maxWidth}px;
  width: ${({ fixedWidth, percentWidth = 10 }) =>
    fixedWidth ? `${fixedWidth}px` : `${percentWidth}%`};
  word-wrap: break-word;
  overflow: hidden;
  color: ${({ theme }) => theme.darkText};
  background-color: ${({ theme }) => theme.white};
  @media screen and (max-width: 554px) {
    padding: 20px 10px;
  }
`;

export const BodyCell = styled.td`
  ${cellStyles};
  font-size: 16px;
  font-weight: bold;
  @media screen and (max-width: 554px) {
    font-size: 13px;
  }
`;

export const HeadCell = styled.th`
  ${cellStyles};
  font-size: 13px;
  font-weight: 400;
  padding: 20px 15px;
  user-select: none;
  position: sticky;
  top: 0;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.divider};
  }
  @media screen and (max-width: 554px) {
    padding: 15px 10px;
    font-size: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  overflow: auto;
  padding: 0 15px;
  margin-top: 10px;
  height: 100%;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.greyText};
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.shadow};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.white};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 30px 0 25px 0;
  @media screen and (max-width: 554px) {
    height: auto;
    flex-direction: column;
    margin: 20px 0 15px 0;
  }
`;

export const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.darkText};
  @media screen and (max-width: 554px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ShadowBox = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: calc(100% - 80px);
  min-height: 350px;
  width: 100%;
  box-shadow: 0px 3px 15px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  padding-bottom: 60px;
  margin-bottom: 30px;
  position: relative;
  @media screen and (max-width: 554px) {
    margin-bottom: 20px;
    padding-bottom: 40px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  align-items: center;
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.lightGrey};
  border-radius: 0px 0px 10px 10px;
  @media screen and (max-width: 554px) {
    height: 40px;
  }
`;

export const PaginationText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.darkText};
  margin-right: 20px;
  @media screen and (max-width: 554px) {
    font-size: 12px;
    margin-right: 10px;
  }
`;

export const PaginationInfo = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.darkText};
  margin-left: 80px;
  margin-right: 40px;
  @media screen and (max-width: 554px) {
    font-size: 12px;
    margin-left: 40px;
    margin-right: 20px;
  }
`;

export const IconButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  font-size: 10px;
  margin-left: ${({ ml = 0 }) => ml}px;
  margin-right: ${({ mr = 0 }) => mr}px;
  cursor: pointer;
  @media screen and (max-width: 554px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledSelect = styled.select`
  border: none;
  padding-bottom: 4px;
  border-bottom: 2px solid ${({ theme }) => theme.divider};
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.darkText};
  cursor: pointer;
  font-family: ${({ theme }) => theme.font};
  @media screen and (max-width: 554px) {
    font-size: 12px;
    padding-bottom: 2px;
  }
`;
