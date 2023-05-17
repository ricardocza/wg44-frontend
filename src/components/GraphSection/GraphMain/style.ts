import { styled } from "styled-components";

export const StyledGraphMain = styled.section`
    display: flex;
    flex-direction: column;    
    row-gap: 12px;
    align-items: center;
    width: 100%;
    margin: 1.5rem 0 0;    
    
    
    & > header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        
        
        & > .ticker-info {
            position: relative;
            padding-left: 70px;
            display: flex;
            align-items: center;
            max-width: 200px;
            gap: 12px;
            & > div > p {
                color: var(--color-grey200);
            }
            & > .logo {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 50px;
                display: flex;
                background-color: red;
                & > img {
                    width: 100%;
                }
            }
        }
        & > .disclaimer {
            max-width: 45%;
            text-align: center;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
        & > div + h2 {            
            height: fit-content;            
        }
    }

    & > .graph {
        position: relative;
        overflow: hidden;
        width: var(--graph-width);;
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