import React, { useContext, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { SchedulingContext } from '../../context/SchedulingItems';
import { SearchBar } from '../SearchBar';

import * as S from './elements';

const TopBar = ({ isDarkTheme, setIsDarkTheme }) => {

    const {
        filteredData,
        setFilteredSearch
    } = useContext(SchedulingContext)
    const { pathname } = useLocation()
    const title = (pathname === '/agendamento' ? 'Agendamento' : pathname === '/todos-agendamentos' && 'Todos os Agendamentos')
    const [showLogout, setShowLogout] = useState(false)
    const [showThemeSelection, setShowThemeSelection] = useState(false)

    const handleThemeSelection = () => {
        setIsDarkTheme(!isDarkTheme)
        localStorage.setItem("theme", !isDarkTheme);
    }

    return (
        <S.Container>
            <h1>{title}</h1>
            <SearchBar
                sourceList={filteredData}
                setList={setFilteredSearch}
                placeholder='Digite para pesquisar'
            />
            <S.ContainerButtons>
                <S.Configuration onClick={() => setShowThemeSelection(!showThemeSelection)} />
                {showThemeSelection &&
                    < S.MenuThemeSelection onClick={() => {
                        handleThemeSelection()
                        setShowThemeSelection(false)
                    }}>
                        {
                            isDarkTheme
                                ?
                                <>
                                    <S.LightIcon />
                                    <p>Tema Claro</p>
                                </>
                                :
                                <>
                                    <S.DarkIcon />
                                    <p>Tema Escuro</p>
                                </>
                        }
                    </S.MenuThemeSelection>
                }

                <S.User onClick={() => setShowLogout(!showLogout)} />
                {showLogout &&
                    < S.MenuLogout to='/'>
                        <S.LogoutIcon />
                        Logout
                    </S.MenuLogout>
                }
            </S.ContainerButtons>
        </S.Container >
    )
};

export default TopBar;
