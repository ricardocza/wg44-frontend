import { styled } from "styled-components";

export const StyledGraphData = styled.div`
    text-align: center;    
    display: flex;
    justify-content: center;
    & > table {
        border-radius: 8px;
        overflow: hidden;
        border-spacing: 0;        
        
        & > thead {
            background-color: var(--color-grey400);
            
            & > tr > th {
                padding: 0.5rem 1rem;
            }
        }
        
        & tbody {
            line-height: 30px;
            font-size: 18px;
            background-color: var(--bg-main);
            
           
        }
    }

    .green {
        color: var(--green);
    }
    .red {
        color: var(--red);
    }
`