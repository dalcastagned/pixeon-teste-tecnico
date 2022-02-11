import React, { useEffect, useState, Children } from 'react';
import toast from 'react-hot-toast';

import { getInfo } from '../../services/Api';
import MonitoringDashboard from '../../components/MonitoringDashboard';
import SchedualingCard from '../../components/SchedulingCard';
import Calendar from '../../components/Calendar';
import Alert from '../../components/Alert';
import * as S from './elements'

const Scheduling = () => {

    const [scheduling, setScheduling] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [filterDay, setFilterDay] = useState('')
    const [activeAlert, setActiveAlert] = useState(false)

    console.log(filterDay)

    let percentageDone = (
        filteredData.length
        && filteredData
            .filter(item => item.status !== 'waiting')
            .length
        /
        filteredData.length
    ) * 100
    let percentageWaiting = (
        filteredData.length
        && filteredData
            .filter(item => item.status === 'waiting')
            .length
        /
        filteredData.length
    ) * 100

    useEffect(() => {
        getInfo("/agendamentos")
            .then((data) => {
                setScheduling(data)
                setFilteredData(data)
            })
            .catch(() => {
                toast.error('Erro ao buscar dados')
            });
    }, []);


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
                </S.ContainerCalendar>
                <Alert active={activeAlert} setActiveAlert={setActiveAlert} />
            </S.ContainerRight>
        </S.Container>
    )
};

export default Scheduling;
