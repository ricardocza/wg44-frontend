import { GraphSection } from "../../components/GraphSection"
import { Header } from "../../components/Header"
import { TickerSection } from "../../components/TickerSection"
import { StyledHome } from "./style"

export const Home = () => {

    return <StyledHome>
        <Header/>
        <main>
          <TickerSection/>
          <GraphSection/>
        </main>
    </StyledHome>
}