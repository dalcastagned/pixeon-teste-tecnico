import styled from "styled-components";
import { Link } from "react-router-dom";
import { ChevronRight } from '@styled-icons/boxicons-regular';

export const Container = styled.div`

`

export const Title = styled.h2`  
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #374557;
    padding-bottom: 24px;
`

export const Monitoring = styled.div`
    display: flex;
    gap: 16px;
`

export const SchedulingHeader = styled.div`
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 722px;

    h2{  
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #374557;
    }
`

export const VieAllSchedualings = styled(Link)`
    text-decoration: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #4CBC9A;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const ArrowRight = styled(ChevronRight)`
    color: #4CBC9A;
    height: 25px;
`

export const SchedulingList = styled.div`
    padding-top: 26px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`