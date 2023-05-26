import { styled } from "styled-components";

export const StyledAbout = styled.div`
& > main {
        width: 90%;
        max-width: 750px;
        height: 100%;
        margin: 30px auto;
        padding: 0;
        border-radius: 8px;
        overflow: hidden;
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
        
        & div > p, li{  
            text-align: justify;
            line-height: 24px;
            color: var(--color-grey100);
            font-size: large;
        }
        & div > ul > li {
            margin: 10px 32px 0;
            list-style: disc;
        }
    }

`