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
                <SchedualingCard color='#4CBC9A' title='Exames do servidor C' date='5 de Janeiro, 2021' hour='10H - 12H' description='Nesse Agendamento contem todos os exames do tipo C' />
                <SchedualingCard color='#FEC64F' title='Exames do servidor B' date='5 de Janeiro, 2021' hour='13H - 15H' description='Nesse Agendamento contem todos os exames do tipo B' />
                <SchedualingCard color='#FC6B57' title='Exames do servidor A' date='5 de Janeiro, 2021' hour='7H - 9H' description='Nesse Agendamento contem todos os exames do tipo A' />
            </S.SchedulingList>
        </S.Container>
    )
};

export default Scheduling;
