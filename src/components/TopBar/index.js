import React from 'react';

import { useLocation } from 'react-router-dom';

import * as S from './elements';

const TopBar = () => {

    const { pathname } = useLocation()
    const title = (pathname === '/agendamento' ? 'Agendamento' : pathname === '/todos-agendamentos' && 'Todos os Agendamentos')

    if (pathname === '/') {
        return null
    } else {
        return (
            <S.Container>
                <h1>{title}</h1>
            </S.Container>
        )
    }
};

export default TopBar;
