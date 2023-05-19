import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, TooltipProps } from "recharts"
import { StyledGraph } from "./style"
import { useContext, useEffect, useState } from "react"
import { GraphContext, iGraphData } from "../../../context/GraphContext"

interface iPrediction {
  prediction: number
}
export const Graph = () => {

    const {graphData, plotList, dataCurrent, updatePlot, updateTimer} = useContext(GraphContext)

    
    const [max, setMax] = useState(0 as number)
    const [min, setMin] = useState(9000000 as number)
    
    

    useEffect(() => {
      updatePlot()
        
    }, [graphData])

    interface CustomTooltipProps  {
        label?: string;        
        active?: boolean;
        payload?: any[];
      }

    const CustomTooltip = ({active, payload, label}: CustomTooltipProps) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label}`}</p>
              <p className="value1">{`Price: ${payload[0].value}`}</p>
              <p className="value2">{`Prediction 1: ${payload[0].payload.pred_1}`}</p>
              <p className="value2">{`Prediction 2: ${payload[0].payload.pred_2}`}</p>
              <p className="value2">{`Prediction 3: ${payload[0].payload.pred_3}`}</p>
              <p className="value2">{`Prediction 4: ${payload[0].payload.pred_4}`}</p>
              <p className="value2">{`Prediction 5: ${payload[0].payload.pred_5}`}</p>
              <p className="value2">{`Prediction 6: ${payload[0].payload.pred_6}`}</p>
            </div>
          );
        }
        return null;
      };

    return (<StyledGraph>
        <LineChart width={850} height={500} data={dataCurrent}   >
            <Line type="monotone" dataKey="current" stroke="#8884d8" dot={{r:0}} activeDot={{r:4}} />            
            {plotList[0] ? <Line type="monotone" dataKey="pred_1" stroke="#942626" dot={{r:0}} activeDot={{r:2}} /> : <></>}
            {plotList[1] ? <Line type="monotone" dataKey="pred_2" stroke="#945626" dot={{r:0}} activeDot={{r:2}} /> : <></>}
            {plotList[2] ? <Line type="monotone" dataKey="pred_3" stroke="#8d9426" dot={{r:0}} activeDot={{r:2}} /> : <></>}
            {plotList[3] ? <Line type="monotone" dataKey="pred_4" stroke="#26942a" dot={{r:0}} activeDot={{r:2}} /> : <></>}
            {plotList[4] ? <Line type="monotone" dataKey="pred_5" stroke="#269094" dot={{r:0}} activeDot={{r:2}} /> : <></>}
            {plotList[5] ? <Line type="monotone" dataKey="pred_6" stroke="#592694" dot={{r:0}} activeDot={{r:2}} /> : <></>}
            <CartesianGrid stroke="#393945" strokeDasharray="0" />
            <XAxis dataKey="label" padding={{right: 25, left: 10}}/>
            <YAxis orientation="right" domain={[min, max]} padding={{top:50, bottom:50}}/>
            <Tooltip content={<CustomTooltip/>}/>
        </LineChart>
    </StyledGraph>)
}