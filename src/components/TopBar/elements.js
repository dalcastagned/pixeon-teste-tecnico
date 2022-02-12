import styled from 'styled-components'
import { LogOut, Error } from '@styled-icons/boxicons-regular'
import { Link } from 'react-router-dom';
import { GearFill, MoonFill } from '@styled-icons/bootstrap'
import { Sun } from '@styled-icons/boxicons-solid'
import { Notifications } from '@styled-icons/ionicons-solid'
import { CheckmarkDone } from '@styled-icons/ionicons-sharp'
import { MessageRoundedDetail, MessageAltEdit } from '@styled-icons/boxicons-solid'

export const Container = styled.div`
    width: calc(100vw - 345px);
    height: 120px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 345px;
    background: ${({ theme }) => theme.primaryBackground};
    z-index: 999;   

    h1 {
        font-size: 36px;
        line-height: 54px;
        color: ${({ theme }) => theme.title};    
        text-align: left;
        padding-left: 40px;
        width: 355px;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 40px;
    position: absolute;
    right: 0;
    align-items: center;
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
    top: 70px;
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


export const Configuration = styled(GearFill)`
    width: 25px;
    height: 25px;
    border-radius: 16px;
    position: relative;
    cursor: pointer;
    color: ${({ theme }) => theme.textColor};
`

export const MenuThemeSelection = styled.div`
    height: 40px;
    width: 150px;
    background: #4CBC9A;
    position: absolute;
    top: 70px;
    right: 90px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;

    
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(125%, -95%);
        margin-left: 60px;
        border-width: 5px;
        border-style: solid;
        border-color:  transparent transparent #4CBC9A transparent;
    }
`

export const LightIcon = styled(Sun)`
    height: 20px;
    color: #fff;
`

export const DarkIcon = styled(MoonFill)`
    height: 20px;
    color: #fff;
`

export const Notification = styled(Notifications)`
    width: 25px;
    height: 25px;
    border-radius: 16px;
    position: relative;
    cursor: pointer;
    color: ${({ theme }) => theme.textColor};
`

export const MenuNotification = styled.div`
    height: 80px;
    width: 250px;
    background: #4CBC9A;
    position: absolute;
    top: 70px;
    right: 110px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;
    flex-direction: column;

    
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(670%, -95%);
        margin-left: 60px;
        border-width: 5px;
        border-style: solid;
        border-color:  transparent transparent #4CBC9A transparent;
    }

    p{
        width: 210px;
    }
`

export const DoneIcon = styled(CheckmarkDone)`
    height: 20px;
    color: #fff;
    padding-right: 10px;
`

export const ErrorIcon = styled(Error)`
    height: 20px;
    color: #f00;
    padding-right: 10px;
`

export const Message = styled(MessageRoundedDetail)`
    width: 25px;
    height: 25px;
    border-radius: 16px;
    position: relative;
    cursor: pointer;
    color: ${({ theme }) => theme.textColor};
`

export const MenuMessage = styled.div`
    height: 40px;
    width: 250px;
    background: #4CBC9A;
    position: absolute;
    top: 70px;
    right: 175px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;
    flex-direction: column;

    
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(670%, -95%);
        margin-left: 60px;
        border-width: 5px;
        border-style: solid;
        border-color:  transparent transparent #4CBC9A transparent;
    }

    p{
        width: 210px;
    }
`

export const MessageIcon = styled(MessageAltEdit)`
    height: 20px;
    color: #fff;
    padding-right: 10px;
`
