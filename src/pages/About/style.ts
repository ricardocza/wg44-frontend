import { styled } from "styled-components";

export const StyledAbout = styled.div`
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
        
        & > p, li{            
            color: var(--color-grey100);
            font-size: large;
        }
        & > ul > li {
            margin: 10px 32px 0;
            list-style: disc;
        }
    }

`