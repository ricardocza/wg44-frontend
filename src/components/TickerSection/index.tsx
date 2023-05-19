import React, { useContext, useEffect } from "react"
import { StyledTickerSection } from "./style"
import { UserContext } from "../../context/UserContext"
import { GraphContext } from "../../context/GraphContext"

export const TickerSection = () => {
    const {language} = useContext(UserContext)
    const {
        tickers,
        selectedAsset,
        setSelectedAsset,                
        requestCurrentClose
    } = useContext(GraphContext)
    
    const changeTicker = async (event: React.MouseEvent<HTMLButtonElement>) => {        
        setSelectedAsset(event.currentTarget.value)
    }
    
    useEffect(() => {
        const getTickers = async () => {
            await requestCurrentClose()
        }

        getTickers()
    }, [selectedAsset])

    return (<StyledTickerSection> 
        <h2>{language === "PT" ? "Ativos" : "Assets"}</h2>
        <div className="assets-list">
            {   
                tickers
                ?
                tickers.map(ticker => {
                    
                return  (
                <button key={ticker.id} onClick={changeTicker} value={ticker.asset}>
                    <h4>{ticker.asset}</h4>
                    <h4>{(ticker.last_price).toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h4>
                </button>)
                })
                :
                <></>
            }
        </div>
    </StyledTickerSection>)
}