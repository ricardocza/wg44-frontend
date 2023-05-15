import { styled } from "styled-components";

export const StyledGraphData = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: space-between;
    align-items: flex-end;
    max-width: 320px;
    width: 30%;
    height: var(--graph-height);
    margin: calc(1.5rem + 72px) 0 0;        
    font-size: 20px;
    
    & > .predictions, .average-error {
        background-color: var(--color-grey400);
        border-radius: var(--b-radius8);
        width: 100%;
        height: fit-content;
        padding: 36px 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;


        & div {
            display: flex;
            justify-content: space-between;
        }
    }
`