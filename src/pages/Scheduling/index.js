import React, { useEffect, useState, Children, useContext } from 'react';

import { SchedulingContext } from '../../context/SchedulingItems';
import MonitoringDashboard from '../../components/MonitoringDashboard';
import SchedualingCard from '../../components/SchedulingCard';
import Calendar from '../../components/Calendar';
import Alert from '../../components/Alert';
import Range from '../../components/Range';
import * as S from './elements'

const Scheduling = () => {

    const {
        scheduling,
        filteredData,
        setFilteredData,
        percentageDone,
        percentageWaiting
    } = useContext(SchedulingContext)
    const [filterDay, setFilterDay] = useState('')
    const [activeAlert, setActiveAlert] = useState(false)
    const percentageDisk = 55
    const colorRange = (
        percentageDisk <= 30
            ? '#4CBC9A'
            : (percentageDisk > 30 && percentageDisk <= 60)
                ? '#FFBABF'
                : (percentageDisk > 60 && percentageDisk <= 80)
                    ? '#FEC64F'
                    : '#FC6B57'
    )

    useEffect(() => {
        if (filterDay !== '') {
            setFilteredData(scheduling
                .filter(item => item.day === `2021-01-${filterDay}`)
            )
        } else {
            setFilteredData(scheduling)
        }

        if (filterDay !== '' && scheduling
            .filter(item => item.day === `2021-01-${filterDay}`)
            .length === 0
        ) {
            setActiveAlert(true)
        } else {
            setActiveAlert(false)
        }
    }, [filterDay]);

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
                    {Children.toArray(filteredData.slice(0, 5).map(item => (
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
                    <Calendar setFilterDay={setFilterDay} data={scheduling} />
                    <S.ContainerRange>
                        <S.TitleRange>Monitoramento do Storage</S.TitleRange>
                        <Range percentage={percentageDisk} colorRange={colorRange} />
                        <S.InfoRange>Aqui é possível visualizar o total em disco do servidor na nuvem</S.InfoRange>
                        <S.Subtitles>
                            <li><S.Circle color='#4CBC9A' />Normal</li>
                            <li><S.Circle color='#FFBABF' />Atenção</li>
                            <li><S.Circle color='#FEC64F' />Alerta</li>
                            <li><S.Circle color='#FC6B57' />Crítico</li>
                        </S.Subtitles>
                    </S.ContainerRange>
                </S.ContainerCalendar>
                <Alert active={activeAlert} setActiveAlert={setActiveAlert} />
            </S.ContainerRight>
        </S.Container>
    )
};

export default Scheduling;
