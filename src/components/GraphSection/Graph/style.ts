import { styled } from "styled-components";

export const StyledGraph = styled.div`
    height: 100%;
    width: 100%;    
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;

    & .custom-tooltip {
        padding: 1rem;
        border-radius: var(--b-radius8);
        background-color: var(--color-grey200);
        font-weight: 500;
        line-height: 20px;
    }
       
`