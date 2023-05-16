import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { StyledMenu } from "./style"
import { UserContext } from "../../context/UserContext"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Warning } from "./Warning";
import { GraphContext } from "../../context/GraphContext";
import spinner from "../../imgs/spinner.png"
export const Header = () => {
    const {language, setLanguage} = useContext(UserContext)
    const {serverStatus, loading} = useContext(GraphContext)
    const [warningName, setWarningName] = useState("hide")
    
    const showWarning = () => {
        setWarningName("show")        
    }
    const hideWarning = () => {
        setWarningName("hide")
    }
    return( <StyledMenu>
        <ul>
            <li onMouseEnter={() => setWarningName("show")} onMouseLeave={() => setWarningName("hide")}>
                Home
                <Warning/>
            </li>
            <li onMouseEnter={showWarning} onMouseLeave={hideWarning}>
                {language === "PT" ? "Banco de dados" : "Database"}
                <Warning/>
            </li>
            <li onMouseEnter={showWarning} onMouseLeave={hideWarning}>
                {language === "PT" ? "Sobre" : "About"}
                <Warning/>
            </li>
            <li onMouseEnter={showWarning} onMouseLeave={hideWarning}>
                {language === "PT" ? "Apoie!" : "Support!"}
                <Warning/>
            </li>
        </ul>     
        <div className="server-status">
            <p>{language === "PT" ? "Status do servidor:" : "Server status:"}</p>
            {loading ? 
            <div className="spinner">
                <img src={spinner} alt="" />
            </div>
            :
            <div className={serverStatus} title={serverStatus === "up" ? "Server is up!" : "Server is down!"}></div>
            }
        </div>  
        <div className="languages">
            <div className="socials">
                <a href="https://www.linkedin.com/in/ricardo-cza/" target="_blank" rel="noreferrer">
                    <LinkedInIcon fontSize="large" color="primary"/>
                </a>
                <a href="https://github.com/ricardocza" target="blank" rel="noreferrer">
                    <GitHubIcon fontSize="large" color="primary"/>
                </a>
            </div>
                <label htmlFor="PT">
                    PT
                    <input onClick={()=> setLanguage("PT")} type="radio" name="language" id="PT" value="PT" defaultChecked/>
                </label>            
                <p>|</p>
                <label htmlFor="EN">
                    EN
                    <input onClick={() => setLanguage("EN")} type="radio" name="language" id="EN" value="EN"/>
                </label>
        </div>
    </StyledMenu>)
}