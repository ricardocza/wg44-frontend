import { styled } from "styled-components";


export const StyledMenu = styled.header`
    background-color: #282727;
    color: white;    
    height: var(--header-height);
    font-size: 24px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    
    & > ul {
        display: flex;        
        gap: 60px;
        
        & > li {
            position: relative;
            & > div {
                display: none;

            }
            &:hover {
                cursor: not-allowed;
                
                & > div {
                    display: flex;
                    
                }
            }
        }
    }

    & > .server-status {
        display: flex;
        align-items: center;
        gap: 16px;
        position: relative;

        & > .down {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: red;
            box-shadow: 0 0 10px -2px;
        }

        & > .up {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #00a400;
            box-shadow: 0 0 10px -2px;
        }

        & > .spinner {
            width: 20px;
            height: 20px;
            
            & > img {
                width: 25px;
                height: 25px;
                position: absolute;
                right: -2px;
                top: 0;
                                
                animation-name: animate-spinner;
                animation-duration: 0.75s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

        }

       
    }
        

    & > .languages {
        display: flex;    
        align-items: center;
        color: grey;
        
        & > .socials {
        display: flex;
        gap: 10px;
        margin-right: 40px;

        & > a {
            display: flex;
        }
        }
        & > label {
            cursor: pointer;

        }
        & >label:has(input:checked ){
            color: white;
            transition: 0.3s;
        }
        & > label > input {
            visibility: hidden;
            width: 0;   
        }
        & > p {
            padding: 0 1rem;
            color: white;
        }
        
        }
    
    @keyframes animate-spinner {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    }
`