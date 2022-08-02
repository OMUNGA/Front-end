import styled from 'styled-components'

export const Container = styled.main`
    background: ${({ theme }) => theme.colors.primary};
    height: 435px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        h2 {
        text-align: center;
        width: 100%;
        height: 36px;

        font-family: roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 112%;
        color: #FFFFFF;
    }

    h3 {
        width: 518px;
        text-align: center;
        height: 22px;
        margin: auto;
        font-family: roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 112%;

        color: rgba(255, 255, 255, 0.7);
    }
    }  

    ul {
        list-style: none;
        margin-top: 60px;
        display: flex;
        justify-content: center;

        gap: 51px;

        li {
            text-align: center;

            h1 {
                font-family: roboto;
                font-style: normal;
                font-weight: 400;
                font-size: 110px;
                color: #000000;
                line-height: 75%;
                
                opacity: 0.7;
            }
            
            p {
                width: 247px;
                font-family: roboto;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 112%;
                color: #FFFFFF;
                margin-top: -30px;
            }
        }
    }
`