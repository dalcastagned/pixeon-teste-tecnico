import React from 'react';

import * as S from './elements'

const SchedualingCard = ({ status, title, date, hour, description }) => {

    const color = (
        status === "done"
            ? '#4CBC9A'
            : status === "waiting"
                ? '#FEC64F'
                : status === "error"
                && '#FC6B57'
    )

    return (
        <S.Container color={color} >
            <S.Information>
                <S.InformationTop>
                    <S.Title>{title}</S.Title>
                    <S.Date><S.CalendarIcon />{date}</S.Date>
                    <S.Hour><S.ClockIcon />{hour}</S.Hour>
                </S.InformationTop>
                <S.InformationBottom>
                    <S.IconDescription />
                    <S.Description>{description}</S.Description>
                </S.InformationBottom>
                <S.ArrowRight color={color} />
            </S.Information>
        </S.Container>
    )
};

export default SchedualingCard;
