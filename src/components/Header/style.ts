import { styled } from "styled-components";


export const StyledMenu = styled.header`
    background-color: black;
    color: white;    
    height: 200px;
    border: 1px solid red;

    & > ul {
        display: flex;
        gap: 30px;
    }
`