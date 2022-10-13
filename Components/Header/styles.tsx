import styled from "styled-components"
import { keyframes } from 'styled-components'

export const StyledHeader = styled.div`
    width: 100%;
    height: 100vh;
`

export const HeroMessage = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 530px;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.extraBig};
    }

    span {
        color: ${({ theme }) => theme.colors.primary}
    }

    @media (max-width: 760px) {
        text-align: center;

        h1 {
            font-size: 300%;
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.small};
        }
    }

    @media (max-width: 560px) {
        width: 100%;
        padding: 25.5px;
    }
`

export const HeroSection = styled.div`
    height: 100%;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        background: ${({ theme }) => theme.colors.primary};
        width: 26%;
        right: 0;
        height: 100%;
        position: absolute;

        @media (max-width: 920px) {
            background: none;
        }
    }
`

const lampadaAnimation = keyframes`
	0%{
        height: 65%;
	}

    50%{
        height: 69%;
    }
	100%{
        height: 65%;
	}

`

export const Lampada = styled.img`
    position: absolute;
    right: 11.3em;
    top: 72px;
    width: 35%;
    z-index: 1;
    animation: ${lampadaAnimation} 2.9s ease-in-out infinite;

    /* @media (max-width: 1014px) {
        
    } */
`

export const VerMais = styled.div`
    position: absolute;
    bottom: 4em;
    display: flex;
    align-items: center;
    cursor: pointer;

    button {
        border: 0;
        border-radius: 50%;
        padding: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.colors.standard.white};
        box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
        margin-right: 1em;
        font-size: 150%;
    }
`