import styled from "styled-components";

export const Main = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    z-index: 3;
    
    @media(max-width: ${({theme}) => theme.mobile}) {
        display: block;
        margin: 0;
        padding: 0;
    }
`

export const NavBar_Expanded = styled.nav`
    height: 40vh;

    @media(max-width: ${({theme}) => theme.mobile}){
        height: 100vh;


        .links li{
            margin: 15px 0;
            font-size: 16px;
        }
    }    
`

export const Flex = styled.div`
    @media(max-width: ${({theme}) => theme.mobile}){
        display: flex;
        flex: 50%;
    }

`
export const Logo = styled.span`
    @media(max-width: ${({theme}) => theme.mobile}){
        font-family: Nico Moji;
        opacity: 1;
        font-weight: bold;
        font-size: 160%;
        position: absolute;
        top: 20px;
        left: 25px;

        &::first-letter {
            color: white;
        }
    }

`

export const ToggleIcon = styled.div`
    @media(max-width: ${({theme}) => theme.mobile}){
        display: flex;
        align-items: center;
        position: absolute;
        top: 28px;
        right: 20px;
        color: white;
    }
`

export const Links = styled.ul`
    @media(max-width: ${({theme}) => theme.mobile}) {
        
        color: white;
        cursor: pointer;
        list-style: none;
        
        position: absolute;
        top: 350px;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity 1;

        li{
            font-weight: bold;
            margin: 10px 0;
            font-size: 20px;
            font-family: Arial;
        }
    }
`

export const SocialMedias = styled.div`
    @media(max-width: ${({theme}) => theme.mobile}) {

        position: fixed;
        display: grid;
        gap: 1.4em;
        font-size: 130%;
        top: 85%;
        right: 1em;
        transform: translate(-50%, -50%);
        z-index: 2;
    
        svg {
            cursor: pointer;
        }
    }
`

export const NavBar = styled.nav`
    display: none;
    @media(max-width: ${({theme}) => theme.mobile}){
        display: flex;
        width: 100%;
        height: 70px;
        box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
        align-items: center;
        position: relative;
        position: fixed;
        top: 0;
        z-index: 0;
        justify-content: space-between;
        background-color: white;
        
        &:before {
            content: "";
            position: absolute;
            background: ${({theme})=> theme.colors.primary};
            width: 26.56%;
            right: 0;
            height: 100%;
            position: absolute;
        }
        
        position: relative;
        transition: 1.5s height ease-in-out;
    }
`

export const Logo1 = styled.span`
    @media(max-width: ${({theme}) => theme.mobile}){
        font-family: Nico Moji;
        opacity: 1;
        font-weight: bold;
        font-size: 160%;
        position: absolute;
        top: 20px;
        left: 25px;

        &::first-letter {
            color: ${({theme})=> theme.colors.primary};
        }
    }
`

export const Flex2 = styled.div`
    @media(max-width: ${({theme}) => theme.mobile}){
        display: flex;
        justify-content: flex-end;
        flex: 30%;
        align-items: center;
    }

`

export const Avatar = styled.img`
    @media(max-width: ${({theme}) => theme.mobile}){
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 0px;
        z-index: 3;
        border: 5px solid ${({theme})=> theme.colors.standard.white};
        box-shadow: 5px 5px 8px rgba(0,0,0,0.1);
        cursor: pointer;
    }
`

export const ToggleIcon1 = styled.div`
    @media(max-width: ${({theme}) => theme.mobile}){
        display: flex;
        align-items: center;
        position: absolute;
        left: 84%;
        top: 0;
        bottom: 0;
        color: white;
    }
`


