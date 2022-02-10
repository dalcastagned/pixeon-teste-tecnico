import React from 'react';

import MonitoringDashboard from '../../components/MonitoringDashboard';
import SchedualingCard from '../../components/SchedulingCard';
import * as S from './elements'

const Scheduling = () => {

    return (
        <S.Container>
            <S.Title>Exames Concluídos/Andamento</S.Title>
            <S.Monitoring>
                <MonitoringDashboard percentage={70} color='#4CBC9A' title='Concluido' />
                <MonitoringDashboard percentage={50} color='#FEC64F' title='Em Andamento' />
            </S.Monitoring>
            <S.SchedulingHeader>
                <h2>Listagem de Agendamentos</h2>
                <S.VieAllSchedualings to='/todos-agendamentos'>
                    Visualizar Todos <S.ArrowRight />
                </S.VieAllSchedualings>
            </S.SchedulingHeader>
            <S.SchedulingList>
                <SchedualingCard status='done' title='Exames do servidor C' day='2021-01-05' initialHour='10' finalHour='12' description='Nesse Agendamento contem todos os exames do tipo C' />
                <SchedualingCard status='waiting' title='Exames do servidor B' day='2021-01-05' initialHour='13' finalHour='15' description='Nesse Agendamento contem todos os exames do tipo B' />
                <SchedualingCard status='error' title='Exames do servidor A' day='2021-01-05' initialHour='7' finalHour='9' description='Nesse Agendamento contem todos os exames do tipo A' />
            </S.SchedulingList>
        </S.Container>
    )
};

export default Scheduling;
