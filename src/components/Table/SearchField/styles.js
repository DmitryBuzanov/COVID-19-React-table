import styled from "styled-components";

export const Wrapper = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  width: 320px;
  @media screen and (max-width: 554px) {
    width: 100%;
  }
`;

export const ClearIconWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 15px;
  height: 100%;
  border-radius: 50px;
  transition: opacity 0.3s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 50px;
  box-shadow: 0px 3px 15px ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.darkText};
  font-family: ${({ theme }) => theme.font};
  width: 100%;
  padding: 12px 42px;

  &::placeholder {
    color: ${({ theme }) => theme.darkText};
    opacity: 0.5;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 100%;
  border-radius: 50px;
`;
