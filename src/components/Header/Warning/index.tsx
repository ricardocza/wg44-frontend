import { useContext } from "react"
import { StyledWarning } from "./style"
import { UserContext } from "../../../context/UserContext"

export const Warning = () => {
    const {language} = useContext(UserContext)
    return <StyledWarning>{language === "PT" ? "Em breve..." : "Soon..."}</StyledWarning>
}