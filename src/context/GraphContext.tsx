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
    tickers: iTicker[]
    setTickers: React.Dispatch<React.SetStateAction<iTicker[]>>
    selectedAsset: string
    setSelectedAsset: React.Dispatch<React.SetStateAction<string>>
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

interface iTicker {
    asset: string
    last_price: number
}

export const GraphContext = createContext({} as iGraphContext)

export const GraphProvider = ({children}: iGraphProviderProps) => {
    const [countPredictions, setCountPredictions] = useState(0 as number)
    const [graphData, setGraphData] = useState([] as iGraphData[])
    const [updateTimer, setUpdateTimer] = useState(0 as number)
    const [mean, setMean] = useState([])
    const [serverStatus, setServerStatus] = useState("down" as string)
    const [loading, setLoading] = useState(false as boolean)
    const [tickers, setTickers] = useState([] as iTicker[])
    const [selectedAsset, setSelectedAsset] = useState("WINFUT" as string)

    const loadData = async  () => {
        try{
            setLoading(true)
            const tickerResponse = await api.get("list/current-close")
            const sortedData = tickerResponse.data.sort((a:iTicker, b:iTicker) => {
                const nameA = a.asset.toUpperCase()
                const nameB = b.asset.toUpperCase()
                if (nameA > nameB) return -1
                if (nameA < nameB) return 1
                return 0;
                
            })
            setTickers(sortedData)
            
            const response = await api.get(`${selectedAsset}/list`)            
            const data = response.data.sort((a:any, b:any)=> b.id < a.id ? 1 : -1)            
            setCountPredictions(response.data.count)
            setGraphData(data)              
            
            const meanResponse = await api.get(`${selectedAsset}/list/mean/`)            
            setMean(Object.values(meanResponse.data))

            setLoading(false)
            setServerStatus("up")
        }
        catch (error:any){
            setLoading(false)
            console.log(error)
            setServerStatus("down")
        }
    }

    
    return <GraphContext.Provider 
        value={{
            selectedAsset,
            setSelectedAsset,
            tickers,
            setTickers,
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