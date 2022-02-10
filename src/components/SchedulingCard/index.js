import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br'

import * as S from './elements'

const SchedualingCard = ({
    status,
    title,
    day,
    initialHour,
    finalHour,
    description
}) => {

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
                    <S.Date><S.CalendarIcon />{moment(day).format('D [de] MMMM, YYYY')}</S.Date>
                    <S.Hour><S.ClockIcon />{`${initialHour}H - ${finalHour}H`}</S.Hour>
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
