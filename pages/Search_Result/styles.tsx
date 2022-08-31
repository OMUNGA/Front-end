import styled from "styled-components";

export const ResoultSection = styled.section`
    //border: 1px solid black;
    max-width: 1400px;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 0;
    


    h1 {
        padding-top: 50px;
    }
    
    span {
        color: ${({theme}) => theme.colors.primary};
    }


    Article {
        border: 1px solid black;
        background: red;
    }
`

