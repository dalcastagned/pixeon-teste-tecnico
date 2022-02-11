import styled from "styled-components";
import { CalendarFill } from 'styled-icons/bootstrap';
import { ClockFill } from '@styled-icons/bootstrap';
import { ChevronRight } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
    width: 722px;
    height: 96px;
    background:  ${({theme}) => theme.primaryBackground};
    border-radius: 16px;
    display: flex;
    position: relative;
    border-left: 16px solid ${({ color }) => color};
`

export const Information = styled.div`
    
`

export const InformationTop = styled.div`
    display: flex;
    align-items: center;
    padding-top: 19px;
`

export const InformationBottom = styled.div`
    display: flex;
    align-items: center;
    padding-top: 9px;
`

export const Title = styled.div`
    padding-left: 28px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: ${({theme}) => theme.title};
    width: 250px;
`

export const Date = styled.div` 
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${({theme}) => theme.textColor};
    display: flex;
    align-items: center;
`

export const Hour = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${({theme}) => theme.textColor};
    display: flex;
    align-items: center;
`

export const Description = styled.div`
    display: flex;
    padding-left: 8px;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${({theme}) => theme.textColor};
`

export const IconDescription = styled.span`
    margin-left: 28px;
    width: 24px;
    height: 24px;
    background: #DBDBDB;
    border-radius: 8px;
`

export const CalendarIcon = styled(CalendarFill)`
    height: 14px;
    color: ${({theme}) => theme.textColor};
    padding-left: 45px;
    padding-right: 9px;
`

export const ClockIcon = styled(ClockFill)`
    height: 14px;
    color: ${({theme}) => theme.textColor};
    padding-left: 45px;
    padding-right: 9px;
`

export const ArrowRight = styled(ChevronRight)`
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translatey(-50%);
    color: ${({ color }) => color};
    height: 25px;
`