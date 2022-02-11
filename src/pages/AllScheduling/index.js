import React, { Children, useContext, useEffect } from 'react';

import { SchedulingContext } from '../../context/SchedulingItems';
import MonitoringDashboard from '../../components/MonitoringDashboard';
import SchedualingCard from '../../components/SchedulingCard';
import * as S from './elements'

const AllScheduling = () => {

    const {
        filteredSearch,
        percentageDone,
        percentageWaiting,
        scheduling,
        setFilteredData
    } = useContext(SchedulingContext)

    useEffect(()=>{
        setFilteredData(scheduling)
    }, [])

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
                </S.SchedulingHeader>
                <S.SchedulingList>
                    {Children.toArray(filteredSearch.map(item => (
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
        </S.Container>
    )
};

export default AllScheduling;
