import React from 'react'
import * as S from './elements'

const Alert = ({ active, setActiveAlert }) => {
    if (active) {
        return (
            <S.Container>
                <S.LikeIcon />
                <S.ContainerInformation>
                    <S.Title>Atenção!</S.Title>
                    <S.Information>Não existem agendamentos para o dia selecionado.</S.Information>
                </S.ContainerInformation>
                <S.CloseButton onClick={()=> setActiveAlert(false)}>X</S.CloseButton>
            </S.Container>
        )
    } else {
        return null
    }
}

export default Alert