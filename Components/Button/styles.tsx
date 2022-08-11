import styled from "styled-components"


interface buttonProps {
    buttonWidth: any
}

export const StyledButton = styled.button<buttonProps>`
    width: ${props => props.buttonWidth || "130px"};
    background: ${({theme})=> theme.colors.standard.dark};
    color: ${({theme})=> theme.colors.standard.white};
    padding: 0.8em 0;
    font-weight: bold;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 0.9em;
    cursor: pointer;
    
`