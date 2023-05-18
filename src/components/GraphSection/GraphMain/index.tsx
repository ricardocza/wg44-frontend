import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext"
import { StyledGraphMain } from "./style"
import { GraphContext } from "../../../context/GraphContext"
import { Clock } from "../../Clock"
import { Graph } from "../Graph"
import logo from "../../../imgs/b3-on-nm--600.png"
import { AssetSelected } from "../../Asset"

export const GraphMain = () => {
    const {language} = useContext(UserContext)
    
    return <StyledGraphMain>
        <header>
            <div className="ticker-info">
                <div className="logo">                    
                    <img src={logo} alt="Índice Bovespa logo"/>
                </div>
                <AssetSelected/>
            </div>
            <div className="disclaimer">{language === "PT" ?
            "Atenção! Essas informações são mostradas com um atraso de 5 minutos e não devem de maneira alguma serem utilizadas como sinal de operação!"
            :
            "Atention! This informations are shown with a delay of 5 minutes and it should never be used as signs of operations"
            }

            </div>
            <Clock/>
        </header>
        <div className="graph">
            <Graph/>
        </div>        
    </StyledGraphMain>
}