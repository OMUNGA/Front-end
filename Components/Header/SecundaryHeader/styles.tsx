import styled from "styled-components";

export const StyledHeader= styled.div`
    width: 100%;
    height: 46vh;
    margin-top: 4em;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        background: ${({theme})=> theme.colors.primary};
        width: 26%;
        top: 0;
        right: 0;
        height: 100%;
        position: absolute;
    }
`