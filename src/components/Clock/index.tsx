import { useEffect, useState, useContext } from "react";
import { StyledClock } from "./style"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

import { GraphContext } from "../../context/GraphContext";

export const Clock = () => {

    const [time, setTime] = useState("" as string)
    const {updateTimer, setUpdateTimer, updatePlot, updateTicker, requestCurrentClose} = useContext(GraphContext)

    const currentTime = () => {
        
        const today = new Date();
        let h = today.getHours();
        let m: string | number = today.getMinutes();
        let s: string | number = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);                
        setTime(h + ":" + m + ":" + s)
    }
    
    const checkTime = (i:number):string | number => {
        if (i < 10) {
            return "0" + i
        };  // add zero in front of numbers < 10
        return i;
    }
    useEffect(() => {
        const clockUpdate = async () => {
            console.log("89ve754b89")
            if(parseInt(time.split(":")[1]) !== updateTimer) {   
                console.log("entrou")         
                setUpdateTimer(parseInt(time.split(":")[1]))            
                updateTicker()
                requestCurrentClose()            
            }
            setInterval(currentTime, 1000)        

        }
        clockUpdate()
    }, [time])
    
    return (<StyledClock>
        <AccessAlarmsIcon/>
        {time}
    </StyledClock>)
}