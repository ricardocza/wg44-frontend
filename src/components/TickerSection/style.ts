import { styled } from "styled-components";

export const StyledTickerSection = styled.div`
    background-color: var(--color-grey300);
    height: 100%;
    max-width: 350px;
    width: 30%;
    color: var(--color-grey0);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: var(--b-radius8);
    
    & > h2 {
        margin: 2rem 0;
        font-weight: 400;
        font-size: 32px;
    }
    
    & > .assets-list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 1rem 2rem;
        
        & > div {
            width: 100%;
            display: flex;
            justify-content: space-between;

            & > h4 {
                font-size: 24px;
            }
            
        }
        & >footer {
            font-size: 16px;
            text-align: center;
        }
    }
`