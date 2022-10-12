import styled from "styled-components";

export const SearchResultSection = styled.div`
    max-width: 1400px;
    margin: 100px auto;
    padding-top: 50px;
    
    
`

export const ResoultSection = styled.section`
    max-width: 1400px;
    margin: 10px auto;
    padding: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

   

    h1 {
        font-size: 26px;
        padding-top: 30px;
        margin-bottom: 0;
    }
    
    span {
        color: ${({theme}) => theme.colors.primary};
    }

    button {
        box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
        background-color: ${({theme})=> theme.colors.standard.white};
        color: black;
    }
`

export const Title = styled.div`
    display: flex; 
    margin-top: 15px;
    span {
        color: ${({theme}) => theme.colors.primary};
    }
    
    span {
        margin: 10px;
    }
    h1 {
        margin-top: 80px;
        font-size: 26px;
        font-weight: bold;
    }
`

export const CardFlexLayout = styled.ul`\
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5em;
`