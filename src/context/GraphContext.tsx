import React, {createContext, useState, useEffect} from "react"
import { api } from "../services/api"

interface iGraphContext {
    countPredictions: number
    setCountPredictions: React.Dispatch<React.SetStateAction<number>>
    graphData: iGraphData[]
    setGraphData:  React.Dispatch<React.SetStateAction<iGraphData[]>>
    updateTimer: number
    setUpdateTimer: React.Dispatch<React.SetStateAction<number>>
    loadData: () => void
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


    const loadData = async  () => {
        try{
            const response = await api.get("WINM23/list")
            const data = response.data.results.sort((a:any, b:any)=> b.id < a.id ? 1 : -1)            
            setCountPredictions(response.data.count)
            setGraphData(data)            
        }
        catch (error:any){
            console.log(error.message)
        }
    }

    
    return <GraphContext.Provider 
        value={{
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