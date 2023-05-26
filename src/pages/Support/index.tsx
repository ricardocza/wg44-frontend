import { useContext } from "react"
import { Header } from "../../components/Header"
import { StyledSupport } from "./style"
import { UserContext } from "../../context/UserContext"

export const Support = () => {
    const {language} = useContext(UserContext)

    return <StyledSupport>
        <Header/>
        <main>
            {language === "PT"
            ?
            <>
            <h1>Projeto sem fins lucrativos</h1>
            <div>
                <p>Gostaria de me apoiar?</p>
                <p>Estou em busca por empregos!</p>
                <p>Fiz essa <a href="https://www.linkedin.com/posts/ricardo-cza_deploy-react-typescript-activity-7066512150474760192-4kI6?utm_source=share&utm_medium=member_desktop">postagem</a> no Linkedin que explica um pouco como foi o processo para criar este projeto, se puder compartilhar ela, ou me indicar para alguma vaga seria ótimo!</p>
            </div>
            </>
            :
            <>
            <h1>Non-profit project</h1>
            <div>
                <p>Would you like to support me?</p>
                <p>I'm searching for jobs!</p>
                <p>I made this <a href="https://www.linkedin.com/posts/ricardo-cza_deploy-react-typescript-activity-7066512150474760192-4kI6?utm_source=share&utm_medium=member_desktop">post</a>  on Linkedin that explains a little about the process to create this project (only in portuguese for now, but if you would like, contact me and I will gladly explain to you!), if you can share it, or indicate me for a vacancy, that would be great!</p>
            </div>
            </>
            }
        </main>
    </StyledSupport>
}