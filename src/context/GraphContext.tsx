import React, {createContext, useState} from "react"
import { api } from "../services/api"

interface iGraphContext {
    countPredictions: number
    setCountPredictions: React.Dispatch<React.SetStateAction<number>>
    graphData: iGraphData[]
    setGraphData:  React.Dispatch<React.SetStateAction<iGraphData[]>>
    updateTimer: number
    setUpdateTimer: React.Dispatch<React.SetStateAction<number>>
    loadData: () => void
    mean: Array<number>
    serverStatus: string
    setServerStatus: React.Dispatch<React.SetStateAction<string>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
interface iGraphProviderProps {
    children: React.ReactNode
}

export interface iGraphData {
    closed_price: number
    pred_1: number
    pred_2: number
    pred_3: number
    pred_4: number
    pred_5: number
    pred_6: number
    diff_1: number
    diff_2: number
    diff_3: number
    diff_4: number
    diff_5: number
    diff_6: number
    err_1: number
    err_2: number
    err_3: number
    err_4: number
    err_5: number
    err_6: number
    created_at: string
    
}
export const GraphContext = createContext({} as iGraphContext)

export const GraphProvider = ({children}: iGraphProviderProps) => {
    const [countPredictions, setCountPredictions] = useState(0 as number)
    const [graphData, setGraphData] = useState([] as iGraphData[])
    const [updateTimer, setUpdateTimer] = useState(0 as number)
    const [mean, setMean] = useState([])
    const [serverStatus, setServerStatus] = useState("down" as string)
    const [loading, setLoading] = useState(false as boolean)

    const loadData = async  () => {
        try{
            setLoading(true)
            const response = await api.get("WINM23/list")
            const data = response.data.results.sort((a:any, b:any)=> b.id < a.id ? 1 : -1)            
            setCountPredictions(response.data.count)
            setGraphData(data)              
            
            const mean_response = await api.get("WINM23/list/mean/")            
            setMean(Object.values(mean_response.data))

            if (response.status === 200 && mean_response.status === 200) {
                setServerStatus("up")
            }
            setLoading(false)
        }
        catch (error:any){
            setLoading(false)
            console.log(error)
            setServerStatus("down")
        }
    }

    
    return <GraphContext.Provider 
        value={{
            loading,
            setLoading,
            serverStatus, 
            setServerStatus,
            mean,
            loadData,
            updateTimer,
            setUpdateTimer,
            countPredictions,
            setCountPredictions,
            graphData,
            setGraphData}}>
                {children}
    </GraphContext.Provider>

}