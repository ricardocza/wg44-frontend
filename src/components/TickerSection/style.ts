import { styled } from "styled-components";

export const StyledTickerSection = styled.div`
    background-color: var(--color-grey300);    
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
        row-gap: 16px;
        padding: 0 2rem 2rem;
        
        & > button {
            width: 100%;
            background-color: var(--color-grey300);    
            color: var(--color-grey0);
            cursor: pointer;
            border: none;
            display: flex;
            justify-content: space-between;
            gap: 8px;

            & > h4 {
                font-size: 24px;
            }
            
        }
        & > footer {
            font-size: 16px;
            text-align: center;
        }
    }
`