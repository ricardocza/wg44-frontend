import React, {createContext, useState} from "react"
import { api } from "../services/api"

interface iGraphContext {
    countPredictions: number
    setCountPredictions: React.Dispatch<React.SetStateAction<number>>
    graphData: iGraphData[]
    setGraphData:  React.Dispatch<React.SetStateAction<iGraphData[]>>
    updateTimer: number
    setUpdateTimer: React.Dispatch<React.SetStateAction<number>>    
    mean: iMean
    setMean: React.Dispatch<React.SetStateAction<iMean>>
    serverStatus: string
    setServerStatus: React.Dispatch<React.SetStateAction<string>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    tickers: iTicker[]
    setTickers: React.Dispatch<React.SetStateAction<iTicker[]>>
    selectedAsset: string
    setSelectedAsset: React.Dispatch<React.SetStateAction<string>>
    requestCurrentClose: () => any
    requestGraphData: () => any
    requestMeanData: () => any
    plotList: Array<boolean>
    setPlotList: React.Dispatch<React.SetStateAction<Array<boolean>>>
    updatePlot: () => void
    dataCurrent: any
    setDataCurrent: any
    updateTicker: () => void

}
interface iGraphProviderProps {
    children: React.ReactNode
}

interface iMean {
	mean_diff_1: number
	mean_diff_2: number
	mean_diff_3: number
	mean_diff_4: number
	mean_diff_5: number
	mean_diff_6: number
}

export interface iGraphData { 
    id:number   
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
    id: number
    asset: string
    last_price: number
}

interface iPlotList {
    plot_1: boolean
    plot_2: boolean
    plot_3: boolean
    plot_4: boolean
    plot_5: boolean
    plot_6: boolean
}

export const GraphContext = createContext({} as iGraphContext)

export const GraphProvider = ({children}: iGraphProviderProps) => {
    const [countPredictions, setCountPredictions] = useState(0 as number)
    const [graphData, setGraphData] = useState([] as iGraphData[])
    const [updateTimer, setUpdateTimer] = useState(0 as number)
    const [mean, setMean] = useState({} as iMean)
    const [serverStatus, setServerStatus] = useState("down" as string)
    const [loading, setLoading] = useState(false as boolean)
    const [tickers, setTickers] = useState([] as iTicker[])
    const [selectedAsset, setSelectedAsset] = useState("WINFUT" as string)
    const [plotList, setPlotList] = useState([false, false, false, false, false, false])
    const [dataCurrent, setDataCurrent] = useState([] as any)

    const requestCurrentClose = async () => {
        try {
            const tickerResponse = await api.get("list/current-close")
            const sortedData = tickerResponse.data.sort((a:iTicker, b:iTicker) => {
                const nameA = a.asset.toUpperCase()
                const nameB = b.asset.toUpperCase()
                if (nameA > nameB) return -1
                if (nameA < nameB) return 1
                return 0;
                
            })
            setTickers(sortedData)
        } catch (error: any) {            
            console.log(error)            
            return false
        }
    }

    const requestGraphData = async () => {
        try {
            const response = await api.get(`${selectedAsset}/list`)                        
            return response
        } catch (error: any) {
            console.log(error)            
            return false
        }
    }

    const requestMeanData = async () => {
        try {
            const meanResponse = await api.get(`${selectedAsset}/list/mean/`)            
            return meanResponse.data
        } catch (error:any) {
            console.log(error)            
            return false
        }
    }

    const shiftLoop = (arr:any, qtd:number) => {
        const shiftedArr = [...arr]
        for (let i=0; i<6-qtd; i++) {        
          shiftedArr.push("")
        }
        for (let i=0; i<qtd; i++) {
          shiftedArr.unshift("")
        }
  
        return shiftedArr
      }

    const updatePlot = () => {
        if (graphData[0]?.id) {
        
            let arrCurrent: any = []
            let pred1: any = []
            let pred2: any = []
            let pred3: any = []
            let pred4: any = []
            let pred5: any = []
            let pred6: any = []
            const labels: Array<string> = []
            graphData.forEach(data => {
              arrCurrent.push(data.closed_price)
              pred1.push(data.pred_1)
              pred2.push(data.pred_2)
              pred3.push(data.pred_3)
              pred4.push(data.pred_4)
              pred5.push(data.pred_5)
              pred6.push(data.pred_6)
              labels.push(data.created_at)
      
            })
            arrCurrent = shiftLoop(arrCurrent, 0)
            pred1 = shiftLoop(pred1, 1)
            pred2 = shiftLoop(pred2, 2)
            pred3 = shiftLoop(pred3, 3)
            pred4 = shiftLoop(pred4, 4)
            pred5 = shiftLoop(pred5, 5)
            pred6 = shiftLoop(pred6, 6)
      
            for (let i=0; i<6 ; i++) {
              const hour: number = parseInt(labels[labels.length-1].split(":")[0])
              const minute:number = parseInt(labels[labels.length-1].split(":")[1])
              const second:number = parseInt(labels[labels.length-1].split(":")[2])
      
              if (minute+1 === 60) {
                labels.push(`${hour+1}:00:${second}`)
              }
              else {
                labels.push(`${hour}:${minute+1}:${second}`)
              }
            }  
            
            const data = labels.map((item, i) => {          
              const currentItem: any = {
                label: item            
              }
              if (arrCurrent[i]) currentItem["current"] = arrCurrent[i]
              if (pred1[i]) currentItem["pred_1"] = pred1[i]
              if (pred2[i]) currentItem["pred_2"] = pred2[i]
              if (pred3[i]) currentItem["pred_3"] = pred3[i]
              if (pred4[i]) currentItem["pred_4"] = pred4[i]
              if (pred5[i]) currentItem["pred_5"] = pred5[i]
              if (pred6[i]) currentItem["pred_6"] = pred6[i]
              return currentItem
            })
            
            setDataCurrent(data)  
                    
          }
    }

    const updateTicker = async () => {
      setLoading(true)        
      const currentData = await requestGraphData()
      const currentMean = await requestMeanData()
      
      if (currentData === false || currentMean === false) {
          setServerStatus("down")
          setLoading(false)
      }
      else {
          const data = currentData.data.results.sort((a:any, b:any)=> b.id < a.id ? 1 : -1)  
          setCountPredictions(currentData.data.count)
          setGraphData(data)        
          setMean(currentMean)        
          setServerStatus("up")
          setLoading(false)
      }
          
  }

    
    return <GraphContext.Provider 
        value={{
            updateTicker,
            dataCurrent,
            setDataCurrent,
            updatePlot,
            plotList,
            setPlotList,
            requestCurrentClose,
            requestGraphData,
            requestMeanData,
            selectedAsset,
            setSelectedAsset,
            tickers,
            setTickers,
            loading,
            setLoading,
            serverStatus, 
            setServerStatus,
            mean,
            setMean,            
            updateTimer,
            setUpdateTimer,
            countPredictions,
            setCountPredictions,
            graphData,
            setGraphData}}>
                {children}
    </GraphContext.Provider>

}