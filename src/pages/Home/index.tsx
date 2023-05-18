import { useContext, useEffect } from "react"
import { GraphSection } from "../../components/GraphSection"
import { Header } from "../../components/Header"
import { TickerSection } from "../../components/TickerSection"
import { StyledHome } from "./style"
import { GraphContext } from "../../context/GraphContext"

export const Home = () => {
  const {
    tickers,        
    requestGraphData,
    requestMeanData,
    setCountPredictions,
    setGraphData,
    setLoading, 
    setServerStatus,        
    setMean,
    setUpdateTimer
} = useContext(GraphContext)
  
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

  useEffect(()=> {
    updateTicker()
  },[tickers, setUpdateTimer])
  

    return <StyledHome>
        <Header/>
        <main>
          <TickerSection/>
          <GraphSection/>
        </main>
    </StyledHome>
}