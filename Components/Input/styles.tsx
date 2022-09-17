import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    margin-top: 1.5em;

    @media (max-width: 549px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        button {
            width: 100%;
            margin-top: 20px;
            margin-left: 0px;
        }
    }

    button {
        margin-left: -50px;

        @media(max-width: 549px) {
            margin-left: 0px;
        }
    }
`

export const StyledInput = styled.input`
    padding: 1em 2em;
    border: none;
    background: ${({theme})=> theme.colors.gray};
    border-radius: 25px;
    width: 540px;
`

