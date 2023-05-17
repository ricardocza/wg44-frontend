import { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import { StyledGraphData } from "./style"
import { GraphContext } from "../../../context/GraphContext"

export const GraphData = () => {
    const {language} = useContext(UserContext)
    const {graphData, mean} = useContext(GraphContext)


    return <StyledGraphData>
        <table>
            <thead>
                <th>Período Estimado</th>
                <th>Valor Estimado</th>
                <th>Variação</th>
                <th>Variação (%)</th>
                <th>Média de Erro diária do período</th>
                <th>Média de Erro global do período</th>
            </thead>
            <tbody>                
                <tr>
                    <td>período m+1</td>
                    <td>100000</td>
                    <td>50</td>
                    <td>0.05 %</td>
                    <td>35</td>
                    <td>30</td>
                    <input className="plot-selectors" type="checkbox" name="p1" id="" />                    
                </tr>
                <tr>
                    <td>período m+2</td>
                    <td>100000</td>
                    <td>50</td>
                    <td>0.05 %</td>
                    <td>35</td>
                    <td>30</td>
                    <input className="plot-selectors" type="checkbox" name="p2" id="" />  
                    
                </tr>
                <tr>
                    <td>período m+3</td>
                    <td>100000</td>
                    <td className="green">50</td>
                    <td>0.05 %</td>
                    <td>35</td>
                    <td>30</td>
                    <input className="plot-selectors" type="checkbox" name="p3" id="" />  
                    
                </tr>
                <tr>
                    <td>período m+4</td>
                    <td>100000</td>
                    <td>50</td>
                    <td>0.05 %</td>
                    <td>35</td>
                    <td>30</td>
                    <input className="plot-selectors" type="checkbox" name="p4" id="" />  
                    
                </tr>
                <tr>
                    <td>período m+5</td>
                    <td>100000</td>
                    <td className="red">-50</td>
                    <td>0.05 %</td>
                    <td>35</td>
                    <td>30</td>
                    <input className="plot-selectors" type="checkbox" name="p5" id="" />  
                    
                </tr>
                
            </tbody>
        </table>
    </StyledGraphData>

}