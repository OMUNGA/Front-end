import styled from 'styled-components'

export const FeaturesSection = styled.section`
    background: ${({ theme }) => theme.colors.primary};
    height: 400px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: ${({ theme }) => theme.colors.standard.white};

    span {
        font-family: Nico Moji;
        font-size: 90px;
        color: ${({ theme }) => theme.colors.standard.dark};
    }

    div {
        h2 {
        text-align: center;
        width: 100%;
        font-family: roboto;
        font-style: normal;
        font-weight: 700;
        font-size: ${({theme})=> theme.fontSize.title};
        line-height: 112%;
        color: #FFFFFF;
    }

    h3 {
        width: 518px;
        text-align: center;
        height: 22px;
        margin: auto;

        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 112%;

        color: rgba(255, 255, 255, 0.7);
    }
    }  

    ul {
        list-style: none;
        margin-top: 45px;
        display: flex;
        justify-content: center;

        gap: 51px;

        li {
            text-align: center;
            
            p {
                width: 247px;
                font-weight: 400;
                line-height: 112%;
                color: #FFFFFF;
                opacity: 0.7;
            }
        }
    }
`