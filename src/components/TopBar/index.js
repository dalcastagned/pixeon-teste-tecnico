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
    const [showNotification, setShowNotification] = useState(false)
    const [showMessage, setShowMessage] = useState(false)

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
                <S.Message onClick={() => {
                    setShowMessage(!showMessage)
                    setShowNotification(false)
                    setShowThemeSelection(false)
                    setShowLogout(false)
                }} />
                {showMessage &&
                    < S.MenuMessage>
                        <p><S.MessageIcon />Exame 1 Realizado</p>
                    </S.MenuMessage>
                }
                <S.Notification onClick={() => {
                    setShowNotification(!showNotification)
                    setShowMessage(false)
                    setShowThemeSelection(false)
                    setShowLogout(false)
                }} />
                {showNotification &&
                    < S.MenuNotification>
                        <p><S.DoneIcon />Agendamento Concluído</p>
                        <p><S.ErrorIcon />Agendamento com Erro</p>
                    </S.MenuNotification>
                }
                <S.Configuration onClick={() => {
                    setShowThemeSelection(!showThemeSelection)
                    setShowMessage(false)
                    setShowNotification(false)
                    setShowLogout(false)
                }} />
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

                <S.User onClick={() => {
                    setShowLogout(!showLogout)
                    setShowMessage(false)
                    setShowNotification(false)
                    setShowThemeSelection(false)
                }} />
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
