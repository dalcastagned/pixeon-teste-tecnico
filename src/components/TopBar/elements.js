import styled from 'styled-components'
import {LogOut} from '@styled-icons/boxicons-regular'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: calc(100vw - 345px);
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 345px;
    background: #fff;
    z-index: 999;   

    h1 {
        font-size: 36px;
        line-height: 54px;
        color: #374557;    
        text-align: left;
        padding-left: 40px;
        width: 355px;
    }
`

export const User = styled.div`
    width: 60px;
    height: 60px;
    background: #DBDBDB;
    border-radius: 16px;
    margin-right: 50px;
    position: relative;
    cursor: pointer;
`

export const MenuLogout = styled(Link)`
    height: 40px;
    width: 100px;
    background: #4CBC9A;
    position: absolute;
    top: 100px;
    right: 30px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 8px;
    text-decoration: none;

    
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-140%, -95%);
        margin-left: 60px;
        border-width: 5px;
        border-style: solid;
        border-color:  transparent transparent #4CBC9A transparent;
    }
`

export const LogoutIcon = styled(LogOut)`
    height: 20px;
    color: #fff;
`