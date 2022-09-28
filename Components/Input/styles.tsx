import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    margin-top: 1.5em;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    button {
        margin-left: -50px;

        @media(max-width: 768px) {
            margin-left: 0px;
            width: 100%;
        }
    }

    input {
        width: 100%;
    }
`

export const StyledInput = styled.input`
    padding: 1em 2em;
    border: none;
    background: ${({theme})=> theme.colors.gray};
    border-radius: 25px;
    width: 540px;
`

