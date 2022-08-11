import styled from "styled-components";

export const ExperimenteSection = styled.section`
    height: 550px;
`

export const Flex1 = styled.div`
    flex: 50%;
    height: 395px;
`

export const Flex2 = styled.div`
    flex: 50%;

    h2{
        width: 500px;
    }
`

export const ImageBox = styled.div`
    width: 92%;
    height: 395px;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
    display: grid;
    padding: 2em  3em;
    border-radius: 25px;
    background: linear-gradient(to right, rgb(133, 113, 255) 33%, rgba(133, 113, 255, 0.1)), url("./images/unidos.jpg");
    background-position: center;
    background-size: cover;

    span{
        display: block;
        margin-bottom: -50px;
        font-weight: bold;
        font-size: 200%;
        font-family: Nico Moji;
        &:first-child{
            color: ${({theme})=> theme.colors.standard.white};
        }
    }
`

export const BoxesDiv = styled.div `
    margin: 3em 0 3em 0;
    display: flex;
    grid-gap: 2em;

    div {
        box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
        background: ${({theme})=> theme.colors.standard.white};
        border-radius: 25px;
        flex: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2.5em 0;

        p{
            margin-top: 0.5em;
            font-size: ${({theme})=> theme.fontSize.small};
        }
    }

    span {
        font-weight: bold;
    }
`
export const Image = styled.img`
     width: 150px;
`

export const Image2 = styled.img`
     width: 50px;

`