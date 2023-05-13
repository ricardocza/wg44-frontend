import { useContext } from "react"
import { StyledTickerSection } from "./style"
import { UserContext } from "../../context/UserContext"
import { GraphContext } from "../../context/GraphContext"
import { GraphData } from "../GraphSection/GraphData"

export const TickerSection = () => {
    const {language} = useContext(UserContext)
    const {graphData} = useContext(GraphContext)

    return (<StyledTickerSection> 
        <h2>{language === "PT" ? "Ativos" : "Assets"}</h2>
        <div className="assets-list">
            <div>
                <h4>WINFUT</h4>
                <h4>{graphData[graphData.length-1] ? graphData[graphData.length-1].closed_price : 0}</h4>
            </div>
            <footer>{language === "PT" ? "Em breve mais ativos serão adicionados" : "Soon more assets will be added"}</footer>
        </div>
    </StyledTickerSection>)
}