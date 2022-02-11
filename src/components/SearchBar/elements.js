import styled from "styled-components";
import {Search} from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  width: 513px;
  height: 60px;
  background: #fafafa;
  border-radius: 16px;
  display: flex;
  align-items: center;
`

export const SearchBar = styled.input`
  background: transparent;
  border-radius: 10px;
  padding: 0;
  border: none;
  outline: none;
  font-size: 18px;
  line-height: 27px;
  width: 100%;
`

export const SearchIcon = styled(Search)`
  height: 24px;
  color: #4CBC9A;
  padding-left: 28px;
  padding-right: 12px;
`