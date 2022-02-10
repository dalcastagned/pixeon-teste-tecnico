import React from 'react';

import { ActivityOutline } from 'styled-icons/evaicons-outline';
import { CalendarFill } from 'styled-icons/bootstrap';
import { useLocation } from 'react-router-dom';

import logo from '../../images/logo.png'
import ButtonMenu from '../../components/ButtonMenu';
import * as S from './elements';


const SideMenu = () => {

    const { pathname } = useLocation()

    return (
        <S.Container>
            <img src={logo} alt='Logo' />
            <ButtonMenu route='/agendamento' icon={<CalendarFill />} text='Agendamento' active={pathname === '/agendamento'} />
            <ButtonMenu route='/todos-agendamentos' icon={<ActivityOutline />} text='Todos os Agendamentos' active={pathname === '/todos-agendamentos'} />
        </S.Container>
    )
};

export default SideMenu;
