import { styled } from "styled-components";


export const StyledMenu = styled.header`
    background-color: #282727;
    color: white;    
    height: 95px;
    font-size: 24px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    
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
    

& ul + .languages {
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
`