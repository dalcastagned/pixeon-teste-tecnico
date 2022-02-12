import React from 'react';
import { withTheme } from 'styled-components'

import { ActivityOutline } from 'styled-icons/evaicons-outline';
import { CalendarFill } from 'styled-icons/bootstrap';
import { useLocation } from 'react-router-dom';

import ButtonMenu from '../../components/ButtonMenu';
import * as S from './elements';


const SideMenu = (props) => {

    const { pathname } = useLocation()

    return (
        <S.Container>
            <img src={props.theme.logo} alt='Logo' />
            <ButtonMenu route='/agendamento' icon={<CalendarFill />} text='Agendamento' active={pathname === '/agendamento'} />
            <ButtonMenu route='/todos-agendamentos' icon={<ActivityOutline />} text='Todos os Agendamentos' active={pathname === '/todos-agendamentos'} />
        </S.Container>
    )
};

export default withTheme(SideMenu);
