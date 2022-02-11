import styled from "styled-components";
import { ChevronRight } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
    width: 353px;
    height: 127px;
    background: ${({theme}) => theme.primaryBackground};
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Percentage = styled.div`
    border-radius: 50%;
    background: ${({ color, theme }) => color + theme.opacity};
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    p{   
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        color: ${({theme}) => theme.title};
    }
`

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    width: 198px;
`

export const Title = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: ${({theme}) => theme.title};
`

export const ProgressBar = styled.div`
    margin-top: 8px;
    background: #DBDBDB80;
    border-radius: 4px;
    width: 170px;
    height: 16px;

    span {
        display: block;
        height: 100%;
        border-radius: 4px;
        background: ${({ color }) => color};
        width:  ${({ percentage }) => percentage + '%'};
    }
`

export const ArrowRight = styled(ChevronRight)`
    padding-left: 10px;
    color: ${({ color }) => color};
    height: 25px;
`