import { styled } from "styled-components";

export const StyledSupport = styled.div`
    & > main {
        width: 90%;
        max-width: 750px;
        height: 100%;
        margin: 30px auto;
        padding: 1rem 2rem;
        border-radius: 8px;
        background-color: var(--color-grey300);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
        & > p {
            color: var(--color-grey100);
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