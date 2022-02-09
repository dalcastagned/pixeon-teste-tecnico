import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 252px;
    width: 100%;
    height: 64px;
    background: ${({ active }) => active ? '#4CBC9A' : 'transparent'};
    border-radius: 20px;

    i{
        display: flex;
        align-items: center;
        color: ${({ active }) => active ? '#fff' : '#A098AE'};
        padding: 0 25px;
        height: 60px;

        
         > * {
             width: 31px;
         }
    }
`

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 500;
    text-align: left;
    font-size: 18px;
    color: ${({ active }) => active === "true" ? '#fff' : '#A098AE'};
    text-decoration: none;
`
