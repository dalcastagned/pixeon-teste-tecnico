import styled from "styled-components";
import { Link } from "react-router-dom";
import { ChevronRight } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
    display: flex;
`

export const ContainerLeft = styled.div`

`

export const ContainerRight = styled.div`
    padding-left: 40px;
`

export const ContainerCalendar = styled.div`
    width: 722px;
    height: 404px;
    background: #fff;
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 40px;
    gap: 30px;
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

export const ContainerRange = styled.div`
    width: 272px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleRange = styled.h2`
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #A098AE;
    text-align: center;
    padding-bottom: 10px;
`

export const InfoRange = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #A098AE;
    padding-top: 10px;
`

export const Subtitles = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 164px;
    margin-top: 30px;
    gap: 8px;

    li {
        list-style: none;
        text-align: left;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #A098AE;
        display: flex;
        align-items: center;
    }
`

export const Circle = styled.div`
    width: 12px;
    height: 12px;
    background: #fff;
    border: 3px solid ${({color}) => color};
    border-radius: 50%;
    margin-right: 8px;
`