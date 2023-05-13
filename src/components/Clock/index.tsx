import { useEffect, useState, useContext } from "react";
import { StyledClock } from "./style"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

import { GraphContext } from "../../context/GraphContext";

export const Clock = () => {

    const [time, setTime] = useState("" as string)
    const {updateTimer, setUpdateTimer, loadData} = useContext(GraphContext)

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
        
        if(parseInt(time.split(":")[1]) !== updateTimer) {            
            setUpdateTimer(parseInt(time.split(":")[1]))
            loadData()
        }
        setInterval(currentTime, 1000)        
        
    }, [time])
    
    return (<StyledClock>
        <AccessAlarmsIcon/>
        {time}
    </StyledClock>)
}