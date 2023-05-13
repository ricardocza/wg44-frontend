import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { StyledGraphSection } from "./style"
import { GraphMain } from "./GraphMain"
import { GraphData } from "./GraphData"

export const GraphSection = () => {
    const {language} = useContext(UserContext)

    return <StyledGraphSection>
        <GraphMain/>
        <GraphData/>
    </StyledGraphSection>
}