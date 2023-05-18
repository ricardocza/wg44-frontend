import { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import { StyledGraphData } from "./style"
import { GraphContext } from "../../../context/GraphContext"

export const GraphData = () => {
    const {language} = useContext(UserContext)
    const {graphData, mean, setPlotList, updatePlot} = useContext(GraphContext)
    
    const updatePlotList = (event: React.MouseEvent<HTMLInputElement>) => {        
        const plotIndex = Number(event.currentTarget.value)
        event.currentTarget.checked 
        ? 
        setPlotList((oldValues) => {
            oldValues[plotIndex] = true            
            return oldValues
        })
        :
        setPlotList((oldValues) => {
            oldValues[plotIndex] = false            
            return oldValues
        })
        updatePlot()
    }

    return <StyledGraphData>
        <table>
            <thead>
                <tr>
                    <th>Plotar</th>
                    <th>Período Estimado</th>
                    <th>Valor Estimado</th>
                    <th>Variação</th>
                    <th>Variação (%)</th>
                    <th>Média de Erro diária do período</th>
                    <th>Média de Erro global do período</th>
                </tr>
            </thead>
            <tbody>
        
                <tr>
                    <td><input onClick={updatePlotList} className="plot-selectors" type="checkbox" name="p1" value={0} /></td>
                    <td>minuto+1</td>
                    <td>{(graphData[graphData.length - 1]?.pred_1)?.toFixed(2)}</td>
                    <td className={graphData[graphData.length - 1]?.pred_1 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {(graphData[graphData.length - 1]?.pred_1 - graphData[graphData.length - 1]?.closed_price)?.toFixed(2)}
                    </td>
                    <td className={graphData[graphData.length - 1]?.pred_1 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {`${(graphData[graphData.length - 1]?.pred_1 / graphData[graphData.length - 1]?.closed_price - 1)?.toFixed(4)} %`}
                    </td>
                    <td>{mean.mean_diff_1?.toFixed(2)}</td>
                    <td>{mean.mean_diff_1?.toFixed(2)}</td>
                    
                </tr>
                <tr>
                    <td><input onClick={updatePlotList} className="plot-selectors" type="checkbox" name="p2" value={1} /></td>
                    <td>minuto+2</td>
                    <td>{(graphData[graphData.length - 1]?.pred_2)?.toFixed(2)}</td>
                    <td className={graphData[graphData.length - 1]?.pred_1 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {(graphData[graphData.length - 1]?.pred_2 - graphData[graphData.length - 1]?.closed_price)?.toFixed(2)}
                    </td>
                    <td className={graphData[graphData.length - 1]?.pred_1 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {`${(graphData[graphData.length - 1]?.pred_2 / graphData[graphData.length - 1]?.closed_price - 1)?.toFixed(4)} %`}
                    </td>
                    <td>{mean.mean_diff_2?.toFixed(2)}</td>
                    <td>{mean.mean_diff_2?.toFixed(2)}</td>
                    
                    
                </tr>
                <tr>
                    <td><input onClick={updatePlotList} className="plot-selectors" type="checkbox" name="p3" value={2} /></td>
                    <td>minuto+3</td>
                    <td>{(graphData[graphData.length - 1]?.pred_3)?.toFixed(2)}</td>
                    <td className={graphData[graphData.length - 1]?.pred_3 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {(graphData[graphData.length - 1]?.pred_3 - graphData[graphData.length - 1]?.closed_price)?.toFixed(2)}
                    </td>
                    <td className={graphData[graphData.length - 1]?.pred_3 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {`${(graphData[graphData.length - 1]?.pred_3 / graphData[graphData.length - 1]?.closed_price - 1)?.toFixed(4)} %`}
                    </td>
                    <td>{mean.mean_diff_3?.toFixed(2)}</td>
                    <td>{mean.mean_diff_3?.toFixed(2)}</td>
                    
                    
                </tr>
                <tr>
                    <td><input onClick={updatePlotList} className="plot-selectors" type="checkbox" name="p4" value={3} /></td>
                    <td>minuto+4</td>
                    <td>{(graphData[graphData.length - 1]?.pred_4)?.toFixed(2)}</td>
                    <td className={graphData[graphData.length - 1]?.pred_4 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {(graphData[graphData.length - 1]?.pred_4 - graphData[graphData.length - 1]?.closed_price)?.toFixed(2)}
                    </td>
                    <td className={graphData[graphData.length - 1]?.pred_4 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {`${(graphData[graphData.length - 1]?.pred_4 / graphData[graphData.length - 1]?.closed_price - 1)?.toFixed(4)} %`}
                    </td>
                    <td>{mean.mean_diff_4?.toFixed(2)}</td>
                    <td>{mean.mean_diff_4?.toFixed(2)}</td>
                    
                    
                </tr>
                <tr>
                    <td><input onClick={updatePlotList} className="plot-selectors" type="checkbox" name="p5" value={4} /></td>
                    <td>minuto+5</td>
                    <td>{(graphData[graphData.length - 1]?.pred_5)?.toFixed(2)}</td>
                    <td className={graphData[graphData.length - 1]?.pred_5 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {(graphData[graphData.length - 1]?.pred_5 - graphData[graphData.length - 1]?.closed_price)?.toFixed(2)}
                    </td>
                    <td className={graphData[graphData.length - 1]?.pred_5 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {`${(graphData[graphData.length - 1]?.pred_5 / graphData[graphData.length - 1]?.closed_price - 1)?.toFixed(4)} %`}
                    </td>
                    <td>{mean.mean_diff_5?.toFixed(2)}</td>
                    <td>{mean.mean_diff_5?.toFixed(2)}</td>
                    
                </tr>
                <tr>
                    <td><input onClick={updatePlotList} className="plot-selectors" type="checkbox" name="p5" value={5} /></td>
                    <td>minuto+6</td>
                    <td>{(graphData[graphData.length - 1]?.pred_6)?.toFixed(2)}</td>
                    <td className={graphData[graphData.length - 1]?.pred_6 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {(graphData[graphData.length - 1]?.pred_6 - graphData[graphData.length - 1]?.closed_price)?.toFixed(2)}
                    </td>
                    <td className={graphData[graphData.length - 1]?.pred_6 - graphData[graphData.length - 1]?.closed_price > 0 
                    ?
                    "green"
                    :
                    "red"
                }>
                        {`${(graphData[graphData.length - 1]?.pred_6 / graphData[graphData.length - 1]?.closed_price - 1)?.toFixed(4)} %`}
                    </td>
                    <td>{mean.mean_diff_6?.toFixed(2)}</td>
                    <td>{mean.mean_diff_6?.toFixed(2)}</td>
                    
                </tr>
            </tbody>
        </table>
    </StyledGraphData>

}