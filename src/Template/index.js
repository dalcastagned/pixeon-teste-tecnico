import React from 'react';
import { useLocation } from 'react-router-dom';

import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';
import * as S from './elements'

const Template = ({ children }) => {

    const { pathname } = useLocation()

    if (pathname === '/') {
        return children
    } else {
        return (
            <>
                <SideMenu />
                <TopBar />
                <S.Container>
                    {children}
                </S.Container>
            </>
        )
    }
};

export default Template;
