import styled from "styled-components";

export const Gauge = styled.div`
    width: 240px;
    height: auto;
    margin: 20px auto;
`

export const Background = styled.div`
    position: relative;
    height: 140px;
    margin-bottom: 10px;
    background-color: #DBDBDB;
    border-radius: 190px 190px 0 0;
    overflow: hidden;
    text-align: center;
`

export const Percentage = styled.div`
    position: absolute;
    top: 140px;
    left: -180%;
    width: 380%;
    height: 380%;
    margin-left: 100px;
    background-color: ${({colorRange}) => colorRange}; 
    transform: ${({angle}) => `rotate(${angle})`};
    transform-origin: top center;
`

export const Mask = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    left: 30px;
    height: 120px;
    background-color: #fff;
    border-radius: 190px 190px 0 0;
`

export const Value = styled.span`
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 55%;
    left: 0;
    width: 100%;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: #374557;
    gap: 9px;
    
    i{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        height: 60px;
        background: ${({colorRange}) => colorRange};
        width: 22px;
        height: 22px;
        border-radius: 50%;
        
         > * {
             width: 11px;
         }
    }
`