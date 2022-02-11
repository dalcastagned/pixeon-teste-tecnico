import styled from "styled-components";
import { ChevronRight, ChevronLeft } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
    width: 354px;
    height: 340px;
`

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    padding-bottom: 16px;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #374557;

    span {
        color: #A098AE;
        padding: 0 55px;
    }
`

export const Weekdays = styled.ul`
    margin: 0;

    li{
        display: inline-block;
        width: 50px;
        height: 40px;
        color: #A098AE;
        text-align: center;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
    }

    .saturday{
        color: #FC6B57;
    }
`

export const Days = styled.ul`
    margin: 0;
`

export const Weekday = styled.li`
    list-style-type: none;
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size:12px;
    font-weight: normal;
    font-size: 18px;
    line-height: 40px;
    margin: 5px 5px;
    border-radius: 9px;
    cursor: pointer;
    background: ${({ scheduling, waiting }) =>
        (scheduling && waiting)
            ? 'linear-gradient(184deg, rgba(76,188,154,1) 0%, rgba(254,198,79,1) 100%)'
            : scheduling
                ? '#4CBC9A'
                : waiting
                    ? '#FEC64F'
                    : 'transparent'
    };
    color: ${({ scheduling, waiting }) =>
        (scheduling || waiting)
            ? '#fff'
            : '#374557'
    };    
`

export const Weekend = styled.li`
    list-style-type: none;
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size:12px;
    color: #FC6B57;      
    font-weight: normal;
    font-size: 18px;
    line-height: 40px;
    margin: 5px 5px;
    cursor: pointer;
`

export const NextMouth = styled.li`
    list-style-type: none;
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size:12px;
    color: #A098AE;      
    font-weight: normal;
    font-size: 18px;
    line-height: 40px;
    margin: 5px 5px;
`

export const ArrowRight = styled(ChevronRight)`
    color: #A098AE;
    height: 25px;
    padding-left: 40px;
`

export const ArrowLeft = styled(ChevronLeft)`
    color: #A098AE;
    height: 25px;
    padding-right: 40px;
`
