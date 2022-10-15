import styled from "styled-components"
  
export const BreakPoint = styled.div`
    padding-top: 7.5em;
`

export const Flex = styled.div`
    display: flex;

    @media(max-width: ${({theme})=> theme.tablet}) {
        flex-direction: column;
    }
`

export const FirstColumn = styled.div`
    width: 52.4%;
    height: 100%;
    
    @media(max-width: ${({theme}) => theme.desktop}) {
		width: 70%;
	}

    @media(max-width: ${({theme}) => theme.tablet}) {
		display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
	}
`

export const SecondColumn = styled.div`
    width: 47%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;

    @media(max-width: ${({theme}) => theme.tablet}) {
        width: 100%;
        align-items: center;
        padding-top: 6em;
	}
`

export const FixedBox = styled.div`
    position: fixed;

    @media(max-width: ${({theme})=> theme.tablet}) {
        position: relative;
    }
`
export const  ArticleHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    img{
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: url(196738323_1923369747813048_4015186492439412313_n);
            border: 3px solid #FFFFFF;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            border-radius: 100px;
            margin-right: 17px;
            object-fit: cover;
    }

    div {
        display: grid;
    }

    strong {
        width: 125px;
        font-style: normal;
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSize.small};
        line-height: 133%;
        color: #000000;
    }

    span {
        width: 125px;
        height: 24.4px;

        font-style: normal;
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSize.extraSmall};
        line-height: 133%;
        color: #000000;
        opacity: 0.5;
    }
`

export const ArticleTitle = styled.div`
    padding-top: 2em;
    padding-bottom: 1em;

    h2{
        margin-bottom: 2em;

        @media (max-width: ${({theme})=> theme.mobile}) {
            font-size: ${({theme})=> theme.fontSize.h2Mobile};
        }

        @media (max-width: ${({theme})=> theme.smallerDevices}) {
            font-size: ${({theme})=> theme.fontSize.h2SmallDevices};
        }
    }

    img {
        height: 410px;
        border-radius: 25px;
        margin-bottom: 2em;

        @media (max-width: ${({theme})=> theme.mobile}) {
            width: 118%;
            height: auto;
            margin-left: -9%;
            border-radius: 0;
        }
    }
`
export const ArticleBody = styled.div`
    p{
        width: 100%;
        opacity: 1;
        margin-bottom: 2em;
    }

    img{
        height: auto;
        margin-bottom: 2em;
    }

    ul {
        margin-top: -1em;
        margin-left: 2em;
    }

    li {
        margin-bottom: 1em;
    }
`
export const AuthorCard = styled.div`
    background: ${({theme})=> theme.colors.standard.white};
    border-radius: 25px;
    box-shadow: 4px 4px 12px rgba(0,0,0,0.1);
    width: 336px;
    height: 405px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;

    button {
        margin-top: 2em;
        background: ${({theme})=> theme.colors.standard.white};
        color:  ${({theme})=> theme.colors.primary};
        box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
        font-weight: bold;
    }

    @media (max-width: ${({theme})=> theme.smallerDevices}) {
        width: 100%;
    }

    @media (max-width: ${({theme})=> theme.smallerDevices}) {
        width: 100%;
    }
`

export const AuthorCard__Header = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    img{
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin-bottom: 2em;
    }

    &::before {
            content: "";
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%, -80.4%);
            width: 120px;
            height: 120px;
            border: 5px solid ${({theme})=> theme.colors.primary};
            border-radius: 50%;
    }

    span {
        font-weight: bold;  
    }

    p {
        opacity: 0.7;
        font-size: ${({theme})=> theme.fontSize.small};
    }
`

export const AuthorCard__SocialMedia = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: center;
    grid-gap: 2em;

    svg {
        font-size: 120%;
    }
`

export const MoreArticleDiv = styled.div`

`

export const MoreArticlesCard = styled.div`
    width: 336px;
    background: ${({theme})=> theme.colors.standard.white};
    box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
    display: flex;
    border-radius: 25px;
    margin-bottom: 2em;
    height: 94px;
    padding: .7em;
    font-size: ${({theme})=> theme.fontSize.small};
    grid-gap: .5em;

    img {
        width: 94px;
        border-radius: 15px;
    }
    
    h4 {
        margin-bottom: .5em;
    }

    &:first-child {
        margin-top: 2em;
    }

    @media (max-width: ${({theme})=> theme.smallerDevices}) {
        width: 100%;
    }
`

