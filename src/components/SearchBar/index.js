import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./elements"

export const SearchBar = ({ sourceList, setList, placeholder }) => {
  
  const { pathname } = useLocation()
  const [searchValue, setSearchValue] = useState("");
  const [searchBool, setSearchBool] = useState(false);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const setNewList = useCallback(
    (newList) => {
      setList(newList);
    },
    [setList]
  );

  useEffect(()=>{
    setSearchValue('')
  },[pathname])

  useEffect(() => {
    const filteredItems = sourceList.filter((item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    searchValue !== ""
      ? setNewList(filteredItems)
      : setNewList(sourceList);
    searchValue !== ""
      ? setSearchBool(false)
      : setSearchBool(true);
  }, [searchValue, sourceList, setNewList, searchBool]);

  return (
    <S.Container>
      <S.SearchIcon/>
      <S.SearchBar
        type="text"
        value={searchValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </S.Container>
  );
};
