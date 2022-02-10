import React from 'react';

import * as S from './elements'

const SchedualingCard = ({ color, title, date, hour, description }) => {
    return (
        <S.Container>
            <S.BorderLeft color={color} />
            <S.Information>
                <S.InformationTop>
                    <S.Title>{title}</S.Title>
                    <S.Date><S.CalendarIcon/>{date}</S.Date>
                    <S.Hour><S.ClockIcon/>{hour}</S.Hour>
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
