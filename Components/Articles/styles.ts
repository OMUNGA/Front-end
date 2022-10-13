import styled from 'styled-components'

export const ArticleSection = styled.section`

        h2 {
            font-size: ${({theme})=> theme.fontSize.title};
        }

        p {
            width: 589px;
            margin: auto;
            line-height: 133%;
        }
    
`

export const SectionTitle = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 2em;

    @media (max-width: 612px) {
        p {
            width: 100%;
        }
    }
`
export const CardWrapper = styled.div`
    > button {
        margin-left: auto;
        background: ${({theme})=> theme.colors.standard.white};
        color: ${({theme})=> theme.colors.standard.dark};
        transition: 0.2s;
        box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
        
        &:hover {
            background: #eee;
        }
    }

    @media (max-width: 328px) {
        > button {
            width: 100%;
        }
    }
`

export const CardFlexLayout = styled.ul`
    margin-top: 60px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.2em;

    @media (max-width: 1425px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 895px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 585px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export const SeeMoreSection = styled.div`
    padding-top: 4em;
    display: flex;
    justify-content: center;

    @media (max-width: 299px) {
        width: 100%;

        a {
            width: 100%;
        }

        button {
            width: 100%;
        }
    }

    button {
        border: 0;
        color: ${({theme})=> theme.colors.standard.dark};
        background: ${({theme})=> theme.colors.standard.white};
        box-shadow: 4px 4px 8px rgba(0,0,0,0.1);

        &:hover {
            background: #eee;
        }
    }
`