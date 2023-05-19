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
    setUpdateTimer,
    updateTicker
} = useContext(GraphContext)
  
  

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