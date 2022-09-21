import styled from "styled-components";

export const SocialMediasBox = styled.div`
    position: fixed;
    display: grid;
    gap: 1.4em;
    font-size: 130%;
    top: 50%;
    right: 1em;
    transform: translate(-50%, -50%);
    z-index: 2;

    svg {
        cursor: pointer;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        bottom: 2em;
	}
    
`