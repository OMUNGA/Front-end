import styled from 'styled-components';

export const Container = styled.div`
    > div {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 25px 25px 0 0;
        position: relative;

        h1 {
            text-align: center;
            font-size: 1.60rem;
            color: ${({ theme }) => theme.colors.standard.white};
            padding: 14px;
        }

        > button {
            top: 17px;
            left: 640px;
            border: none;
            background: none;
            position: absolute;
            border-radius: 50%;
            width: 30px;
            height: 30px;

            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.25s;

            img {
                width: 17px;
            }
        }
    }

    button:hover {
        background: rgba(0, 0, 0, 0.2);
    }
    
`

export const Content = styled.section`
    display: grid;
    gap: 20px;
    padding: 1.20rem 1.30rem;

    button {
        display: flex;
        padding: 1rem ;
        transition: 0.25s;
        border-radius: 25px;
        background: none;
        border: none;
        text-align: left;

        img {
            width: 5rem;
        }

        p {
            opacity: 0.7;
            font-size: 17px;
            line-height: 168%;

            width: 484px;
            height: 55px;       
        }

        h2 {
            font-size: 1.30rem;
        }

        span {
            margin-left: 2rem;
        }
    }

    button:hover {
        border: 0px solid ${({theme}) => theme.colors.primary};
        box-shadow: 2px 2px 20px rgba(128, 113, 251, 0.4);
        background: none;
    }
`