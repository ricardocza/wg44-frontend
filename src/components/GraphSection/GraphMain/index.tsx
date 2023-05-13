import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserContext"
import { StyledGraphMain } from "./style"
import { GraphContext } from "../../../context/GraphContext"
import { Clock } from "../../Clock"
import { Graph } from "../Graph"
import logo from "../../../imgs/b3-on-nm--600.png"

export const GraphMain = () => {
    const {language} = useContext(UserContext)
    const {updateTimer, loadData, countPredictions} = useContext(GraphContext)
    
    useEffect(() => {
        loadData()
    },[])
    
    return <StyledGraphMain>
        <header>
            <div className="ticker-info">
                <div className="logo">
                    <img src={logo} alt="Índice Bovespa logo"/>
                </div>
                <div>
                    <h3>WINM23</h3>
                    <p>Ibovespa mini</p>
                </div>
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
        <footer>
            <ul>
                <li>
                    {language === "PT" ? 
                    "Informações são mostradas com 5 minutos de atraso" 
                    :
                    "Data with 5 minutes delay"
                    }
                </li>
                <li>{language === "PT" ? 
                `As médias de erro são calculadas com base nas últimas ${countPredictions} estimativas` 
                :
                `The average error are calculated based on the last ${countPredictions} predictions`
                }
                </li>
                <li>
                    {language === "PT" ? "As estimativas são atualizadas automáticamente a cada minuto, verifique o sinal de carregamento no canto superior direito do gráfico para ver se está carregando" :
                    "The predictions are updated automatically every minute, check the loading spinner at the top right of the graph to see if it's loading"
                    }
                </li>
            </ul>
        </footer>
    </StyledGraphMain>
}