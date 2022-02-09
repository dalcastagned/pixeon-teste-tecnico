import React from 'react';

import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';
import * as S from './elements'

const Template = ({ children }) => {
    return (
        <>
            <SideMenu />
            <TopBar />
            <S.Container>
                {children}
            </S.Container>
        </>
    )
};

export default Template;
