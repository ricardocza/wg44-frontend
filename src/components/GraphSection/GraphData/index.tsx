import { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import { StyledGraphData } from "./style"
import { GraphContext } from "../../../context/GraphContext"

export const GraphData = () => {
    const {language} = useContext(UserContext)
    const {graphData, mean} = useContext(GraphContext)


    return <StyledGraphData>
        <div className="predictions">
            <div>
                <p>{language === "PT" ? "Estimativa 1" : "Prediction 1"}</p>
                <p>{graphData[graphData.length-1] ? graphData[graphData.length-1].pred_1 : 0}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Estimativa 2" : "Prediction 2"}</p>
                <p>{graphData[graphData.length-1] ? graphData[graphData.length-1].pred_2 : 0}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Estimativa 3" : "Prediction 3"}</p>
                <p>{graphData[graphData.length-1] ? graphData[graphData.length-1].pred_3 : 0}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Estimativa 4" : "Prediction 4"}</p>
                <p>{graphData[graphData.length-1] ? graphData[graphData.length-1].pred_4 : 0}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Estimativa 5" : "Prediction 5"}</p>
                <p>{graphData[graphData.length-1] ? graphData[graphData.length-1].pred_5 : 0}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Estimativa 6" : "Prediction 6"}</p>
                <p>{graphData[graphData.length-1] ? graphData[graphData.length-1].pred_6 : 0}</p>
            </div>
        </div>

        <div className="average-error">
        <div>
                <p>{language === "PT" ? "Média de erro 1" : "Average error 1"}</p>
                <p>{mean[0].toFixed(2)}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Média de erro 2" : "Average error 2"}</p>
                <p>{mean[1].toFixed(2)}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Média de erro 3" : "Average error 3"}</p>
                <p>{mean[2].toFixed(2)}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Média de erro 4" : "Average error 4"}</p>
                <p>{mean[3].toFixed(2)}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Média de erro 5" : "Average error 5"}</p>
                <p>{mean[4].toFixed(2)}</p>
            </div>
            <div>
                <p>{language === "PT" ? "Média de erro 6" : "Average error 6"}</p>
                <p>{mean[5].toFixed(2)}</p>
            </div>
        </div>
    </StyledGraphData>

}