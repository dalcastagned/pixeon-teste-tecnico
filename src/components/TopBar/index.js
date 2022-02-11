import React, { useContext, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { SchedulingContext } from '../../context/SchedulingItems';
import { SearchBar } from '../SearchBar';

import * as S from './elements';

const TopBar = () => {

    const {
        filteredData,
        setFilteredSearch
    } = useContext(SchedulingContext)
    const { pathname } = useLocation()
    const title = (pathname === '/agendamento' ? 'Agendamento' : pathname === '/todos-agendamentos' && 'Todos os Agendamentos')
    const [showLogout, setShowLogout] = useState(false)

    return (
        <S.Container>
            <h1>{title}</h1>
            <SearchBar
                sourceList={filteredData}
                setList={setFilteredSearch}
                placeholder='Digite para pesquisar'
            />
            <S.User onClick={() => setShowLogout(!showLogout)} />
            {showLogout &&
                < S.MenuLogout to='/'>
                    <S.LogoutIcon />
                    Logout
                </S.MenuLogout>
            }
        </S.Container >
    )
};

export default TopBar;
