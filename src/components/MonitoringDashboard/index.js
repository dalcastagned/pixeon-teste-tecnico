import React from 'react';

import * as S from './elements'

const MonitoringDashboard = ({ percentage, color, title }) => {
    return (
        <S.Container>
            <S.Percentage color={color}>
                <p>{`${percentage}%`}</p>
            </S.Percentage>
            <S.Information>
                <S.Title>{title}</S.Title>
                <S.ProgressBar color={color} percentage={percentage} >
                    <span />
                </S.ProgressBar>
            </S.Information>
            <S.ArrowRight color={color} />
        </S.Container>
    )
};

export default MonitoringDashboard;
