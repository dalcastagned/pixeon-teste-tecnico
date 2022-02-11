import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getInfo } from "../../services/Api";

export const SchedulingContext = createContext([]);


export const SchedulingProvider = ({ children }) => {
    
    const [scheduling, setScheduling] = useState([])
    const [filteredData, setFilteredData] = useState([])
    
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

    return (
        <SchedulingContext.Provider
            value={{
                scheduling: scheduling,
                setScheduling: setScheduling,
                filteredData: filteredData,
                setFilteredData: setFilteredData,
                percentageDone: percentageDone,
                percentageWaiting: percentageWaiting
            }}
        >
            {children}
        </SchedulingContext.Provider>
    )
}