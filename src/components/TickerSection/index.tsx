import React, { useContext } from "react"
import { StyledTickerSection } from "./style"
import { UserContext } from "../../context/UserContext"
import { GraphContext } from "../../context/GraphContext"
import { GraphData } from "../GraphSection/GraphData"

export const TickerSection = () => {
    const {language} = useContext(UserContext)
    const {tickers, setSelectedAsset, loadData} = useContext(GraphContext)
    
    const changeTicker = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedAsset(event.currentTarget.value)
        loadData()
    }
    return (<StyledTickerSection> 
        <h2>{language === "PT" ? "Ativos" : "Assets"}</h2>
        <div className="assets-list">
            {   
                tickers
                ?
                tickers.map(ticker => {
                return  (
                <button onClick={changeTicker} value={ticker.asset}>
                    <h4>{ticker.asset}</h4>
                    <h4>{ticker.last_price}</h4>
                </button>)
                })
                :
                <></>
            }
        </div>
    </StyledTickerSection>)
}