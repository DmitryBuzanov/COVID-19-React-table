import React from "react";

import * as S from "./styles";

import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { ReactComponent as ClearIcon } from "../../../assets/clear.svg";

const SearchField = ({ onChange, value }) => (
  <S.Wrapper htmlFor="search">
    <S.SearchIconWrapper>
      <SearchIcon />
    </S.SearchIconWrapper>
    <S.Input
      id="search"
      name="search"
      onChange={onChange}
      placeholder="Search"
      value={value}
    />
    {value && (
      <S.ClearIconWrapper
        onClick={() => {
          onChange("");
        }}
      >
        <ClearIcon />
      </S.ClearIconWrapper>
    )}
  </S.Wrapper>
);

export default SearchField;
