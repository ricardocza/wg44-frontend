import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-primary50: #27AE6050;
        --color-secundary: #EB5757;
        --color-grey600: #333333;
        --color-grey300: #828282;
        --color-grey100: #E0E0E0;
        --color-grey0: #f5f5f5;
        --box-shadow: 0 0 20px -10px;
    }

    *{
        font-family: 'Inter', sans-serif;
        list-style: none;
        padding: 0;
        margin: 0;
    }

`