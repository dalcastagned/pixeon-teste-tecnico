import React, { useEffect, useState, Children } from 'react';
import toast from 'react-hot-toast';

import { getInfo } from '../../services/Api';
import MonitoringDashboard from '../../components/MonitoringDashboard';
import SchedualingCard from '../../components/SchedulingCard';
import * as S from './elements'
import Calendar from '../../components/Calendar';

const Scheduling = () => {

    const [scheduling, setScheduling] = useState([])
    let percentageDone = (
        scheduling.filter(item => item.status !== 'waiting').length
        /
        scheduling.length
    ) * 100
    let percentageWaiting = (
        scheduling.filter(item => item.status === 'waiting').length
        /
        scheduling.length
    ) * 100

    useEffect(() => {
        getInfo("/agendamentos")
            .then((data) => {
                setScheduling(data)
            })
            .catch(() => {
                toast.error('Erro ao buscar dados')
            });
    }, []);

    return (
        <S.Container>
            <S.ContainerLeft>
                <S.Title>Exames Concluídos/Andamento</S.Title>
                <S.Monitoring>
                    <MonitoringDashboard percentage={percentageDone.toFixed(1)} color='#4CBC9A' title='Concluido' />
                    <MonitoringDashboard percentage={percentageWaiting.toFixed(1)} color='#FEC64F' title='Em Andamento' />
                </S.Monitoring>
                <S.SchedulingHeader>
                    <h2>Listagem de Agendamentos</h2>
                    <S.VieAllSchedualings to='/todos-agendamentos'>
                        Visualizar Todos <S.ArrowRight />
                    </S.VieAllSchedualings>
                </S.SchedulingHeader>
                <S.SchedulingList>
                    {Children.toArray(scheduling.slice(0, 5).map(item => (
                        <SchedualingCard
                            status={item.status}
                            title={item.title}
                            day={item.day}
                            initialHour={item.initialHour}
                            finalHour={item.finalHour}
                            description={item.description}
                        />
                    )))}
                </S.SchedulingList>
            </S.ContainerLeft>
            <S.ContainerRight>
                <S.Title>Calendário</S.Title>
                <S.ContainerCalendar>
                    <Calendar data={scheduling} />
                </S.ContainerCalendar>
            </S.ContainerRight>
        </S.Container>
    )
};

export default Scheduling;
