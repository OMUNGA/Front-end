import styled from "styled-components";

export const FooterSection = styled.footer`
    padding: 75px 0;
    background-repeat: no-repeat;
    background: ${({theme})=> theme.colors.standard.white};
    position: relative;
    line-height: 25px;

    div{
        &:first-child {
            z-index: 2;
        }
    }


    &::before {
        content: "0";
        position: absolute;
        font-family: Nico Moji;
        bottom: 0.6em;
        left: 1.2em;
        font-size: 1800%;
        opacity: 0.1;
        font-weight: bold;
        transform: rotate(-50deg);
    }

    &::after {
        content: "0";
        position: absolute;
        font-family: Nico Moji;
        bottom: .5em;
        left: 2.9em;
        font-size: 1200%;
        opacity: 0.1;
        font-weight: bold;
        transform: rotate(-50deg);
    }

    a {
        color: ${({theme})=> theme.colors.standard.dark};
        text-decoration: none;
        opacity: 0.7;
    }

    ul {
        list-style: none;
    }

    p {
        width: 430px;
    }
`
export const ParentDiv = styled.div`
    display: flex;
`


export const FirstColumn = styled.div`

    &::before {
        content: "0";
        position: absolute;
        bottom: .6em;
        left: 0.7em;
        font-size: 1600%;
        opacity: 0.1;
        font-weight: bold;
        transform: rotate(40deg);
        z-index: 1;
        color: rgba(159, 155, 155, 0.9);
    }

    span {
        margin-bottom: 8em;
    }

    p {
        margin-top: 1em;
    }
` 
export const Logo = styled.span`
    font-family: Nico Moji;
    opacity: 1;
    font-weight: bold;
    font-size: 240%;

    &::first-letter {
        color: ${({theme})=> theme.colors.primary}
    }
`

export const SecondColumn = styled.div`
    display: flex;
    grid-gap: 2em;
    justify-content: flex-end;
    flex: 50%;

    h3 {
        margin-bottom: 1em;
    }
`

export const Children1 = styled.div`
    z-index: 2;
`
export const Children2 = styled.div`
    z-index: 2;
`

export const Children3 = styled.div`
    z-index: 2;
`

export const SearchBox = styled.div`
    display: flex;
    justify-content: flex-end;

    input {
        width: 390px;
    }
`

export const Gradient = styled.div`
    background-image: linear-gradient(to top,  rgba(255,255,255,1) 25%, rgba(255,255,255,0.1));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`