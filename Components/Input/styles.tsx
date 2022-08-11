import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    margin-top: 1.5em;

    button {
        margin-left: -50px;
    }
`

export const StyledInput = styled.input`
    padding: 1em 2em;
    border: 0;
    background: ${({theme})=> theme.colors.gray};
    border-radius: 25px;
    width: 540px;
`

