import { styled } from "styled-components";

export const StyledGraphMain = styled.section`
    display: flex;
    flex-direction: column;    
    row-gap: 12px;
    align-items: center;
    width: 70%;
    margin: 1.5rem 0 0;    
    
    
    & > header {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        
        & > .ticker-info {
            display: flex;
            align-items: center;
            gap: 12px;
            & > div > p {
                color: var(--color-grey200);
            }
            & > .logo {
                width: 50px;
                display: flex;
                background-color: red;
                & > img {
                    width: 100%;
                }
            }
        }
        & > .disclaimer {
            width: 55%;
            text-align: center;
        }
        & > div + h2 {            
            height: fit-content;            
        }
    }

    & > .graph {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: var(--graph-height);
        background-color: var(--color-grey400);
        border-radius: var(--b-radius8);    
        
    }

    & > .graph + footer {        
        width: 100%;
        & li {
            list-style: circle;
            margin-left: 16px;
            line-height: 28px;
            font-size: large;
        }
    }
`