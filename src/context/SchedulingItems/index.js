import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getInfo } from "../../services/Api";

export const SchedulingContext = createContext([]);


export const SchedulingProvider = ({ children }) => {
    
    const [scheduling, setScheduling] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [filteredSearch, setFilteredSearch] = useState([])
    
    let percentageDone = (
        filteredSearch.length
        && filteredSearch
            .filter(item => item.status !== 'waiting')
            .length
        /
        filteredSearch.length
    ) * 100

    let percentageWaiting = (
        filteredSearch.length
        && filteredSearch
            .filter(item => item.status === 'waiting')
            .length
        /
        filteredSearch.length
    ) * 100

    useEffect(() => {
        getInfo("/agendamentos")
            .then((data) => {
                setScheduling(data)
                setFilteredData(data)
                setFilteredSearch(data)
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
                percentageWaiting: percentageWaiting,
                filteredSearch: filteredSearch,
                setFilteredSearch: setFilteredSearch
            }}
        >
            {children}
        </SchedulingContext.Provider>
    )
}