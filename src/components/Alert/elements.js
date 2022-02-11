import styled from "styled-components";
import { Like } from '@styled-icons/boxicons-solid'

export const Container = styled.div`
    width: 722px;
    height: 112px;
    background: #FC6B57;
    border-radius: 16px;
    display: flex;
    align-items: center;
    position: relative;
`

export const LikeIcon = styled(Like)`
    height: 45px;
    color: #fff;
    padding-left: 25px;
`

export const ContainerInformation = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
`

export const Title = styled.h2`
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #fff;
`

export const Information = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
`

export const CloseButton = styled.button`
    border: none;
    background: transparent;
    position: absolute;
    top: 18px;
    right: 18px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    
    &:hover{
        transform: scale(1.2)
    }
`