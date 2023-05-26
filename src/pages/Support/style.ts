import { styled } from "styled-components";

export const StyledSupport = styled.div`
    & > main {
        width: 90%;
        max-width: 750px;
        height: 100%;
        margin: 30px auto;   
        padding: 0;
        overflow: hidden;
        border-radius: 8px;
        background-color: var(--color-grey300);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
        & > h1 {
            width: 100%;
            padding: 1rem 2rem;
            color: var(--color-grey100);
            background-color: var(--color-grey400);
        }
        
        & > div {
            padding: 0 2rem 1rem;

        }

        & div > p {
            color: var(--color-grey100);
            line-height: 24px;
            font-size: large;
            
            & > a {
                color: #2196f3;
                text-decoration: underline;
                font-weight: 600;
                &:hover {
                    color: var(--color-primary);
                    transition: 0.5s;
                }
            }
        }


    }
`