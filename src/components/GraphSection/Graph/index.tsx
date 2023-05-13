import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, TooltipProps } from "recharts"
import { StyledGraph } from "./style"
import { useContext, useEffect, useState } from "react"
import { GraphContext, iGraphData } from "../../../context/GraphContext"

interface iPrediction {
  prediction: number
}
export const Graph = () => {

    const {graphData} = useContext(GraphContext)
    const [data, setData] = useState([] as iGraphData[])
    const [max, setMax] = useState(0 as number)
    const [min, setMin] = useState(9000000 as number)
    

    useEffect(() => {
        setData(graphData)                  
        
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
        <LineChart width={1000} height={550} data={data}   >
            <Line type="monotone" dataKey="closed_price" stroke="#8884d8" dot={{r:2}} activeDot={{r:4}} />
            <CartesianGrid stroke="#393945" strokeDasharray="0" />
            <XAxis dataKey="created_at" padding={{right: 100, left: 10}}/>
            <YAxis orientation="right" domain={[min, max]} padding={{top:50, bottom:50}}/>
            <Tooltip content={<CustomTooltip/>}/>
        </LineChart>
    </StyledGraph>)
}