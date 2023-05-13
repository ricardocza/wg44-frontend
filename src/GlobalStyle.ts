import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-main: #616C89;
        --color-primary: #3E2CAD;
        --color-secundary: #EB5757;
        --color-grey400: #282727;
        --color-grey300: #4A5164;
        --color-grey200: #808288;
        --color-grey100: #D9D9D9;
        --color-grey0: #f5f5f5;
        --box-shadow: 0 0 20px -10px;
        --header-height: 95px;
        --b-radius8: 8px;
        --graph-height: 600px
    }

    *{
        font-family: 'Inter', sans-serif;
        list-style: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #root {
        background-color: var(--bg-main);
        height: 100vh;
        /* overflow-y: hidden; */
        & > header {
            height: var(--header-height);
        }
    }

    h2, h3, h4 {
        font-weight: 400;
    }

    main {
        display: flex;
        justify-content: center;
        gap: 16px;
        height: calc(100% - var(--header-height));
        padding: 8px;
    }

`