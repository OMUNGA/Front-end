import styled from "styled-components"


interface buttonProps {
    buttonWidth: any
}

export const StyledButton = styled.button<buttonProps>`
    width: ${props => props.buttonWidth || "130px"};
    background: ${({theme})=> theme.colors.standard.dark};
    color: ${({theme})=> theme.colors.standard.white};
    padding: 1em 0;
    font-weight: bold;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 0.9em;
    cursor: pointer;
    border: 0;
`

export const StyledButton2 = styled.button<buttonProps>`
    width: ${props => props.buttonWidth || "130px"};
    background: ${({theme})=> theme.colors.standard.white};
    padding: 1em 0;
    font-weight: bold;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 0.9em;
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
        
    &:hover {
        background: #eee;
    }
`