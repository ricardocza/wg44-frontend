import { useContext } from "react"
import { Header } from "../../components/Header"
import { StyledAbout } from "./style"
import { UserContext } from "../../context/UserContext"

export const About = () => {
    const {language} = useContext(UserContext)

    return <StyledAbout>
        <Header/>
        <main>
            {
                language === "PT"
                ?
                <>
                <h1>Sobre</h1>
                <div>
                    <p>Projeto em desenvolvimento, ainda existem muitos detalhes para arrumar.</p>
                    <p>Este é um projeto meramente educacional, sem fins lucrativos, e não deve ser de maneira alguma ser utilizados para realizar operações na bolsa de valores</p>
                    <p>Encontrou algum bug? Gostaria de dar uma sugestão? Entre em contato comigo pelo Linkedin!</p>
                    <p>Segue aqui uma lista de futuras atualizações que estão por vir:</p>
                    <ul>
                        <li>Tornar site responsívo</li>
                        <li>Adicionar efeitos de hover</li>
                        <li>Melhorar seção "Sobre"</li>
                        <li>Melhorar seção "Apoie"</li>
                        <li>Melhorar visual em geral</li>
                        <li>Criar tutorial que explica cada parte do projeto</li>
                        <li>Criar lógica para adicionar valor da média de erro diária</li>
                    </ul>
                </div>
                </>
                :
                <>
                <h1>About</h1>
                <div>
                    <p>Project under development, there are still many details to fix.</p>
                    <p>This is a purely educational project, not for profit, and should not be used in any way to carry out operations on the stock exchange.</p>
                    <p>Found a bug? Would you like to make a suggestion? Get in touch with me on Linkedin!</p>
                    <p>Here is a list of future updates to come:</p>
                    <ul>
                        <li>Make website responsive</li>
                        <li>Add hover effects</li>
                        <li>Improve "About" section</li>
                        <li>Improve "Support" section</li>
                        <li>Improve visuals in general</li>
                        <li>Create tutorial that explains each part of the project</li>
                        <li>Create logic to add the value of the daily mean error</li>
                    </ul>
                </div>
                </>
            }
        </main>
    </StyledAbout>
}