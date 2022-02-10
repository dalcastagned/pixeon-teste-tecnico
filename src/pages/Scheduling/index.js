import React from 'react';

import MonitoringDashboard from '../../components/MonitoringDashboard';
import * as S from './elements'

const Scheduling = () => {
    return (
        <S.Container>
            <S.Title>Exames Concluídos/Andamento</S.Title>
            <S.Monitoring>
                <MonitoringDashboard percentage={70} color='#4CBC9A' title='Concluido' />
                <MonitoringDashboard percentage={50} color='#FEC64F' title='Em Andamento' />
            </S.Monitoring>
        </S.Container>
    )
};

export default Scheduling;
