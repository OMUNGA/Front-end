import styled from "styled-components";

export const StyledLogin = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        text-align: center;
        line-height: 112%;
        font-weight: 700;
        font-size: ${({ theme }) => theme.fontSize.title};
    }

    > p {
        text-align: center;
        opacity: 0.5;
        margin-bottom: 46px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        flex-direction: column;

        > div {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        > a {
            color: ${({ theme }) => theme.colors.standard.dark};
            text-align: right;
            margin-top: 16px;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
        }

        > button {
            margin-top: 21px;
            width: 100%;
            font-size: 15px;
            height: 2.25rem;

            svg {
                font-size: 20px;
            }
        }
    }

    > small {
        text-align: center;
        margin-top: 21px;

        font-weight: 400;
        opacity: 0.5;
    }

    header {
        div {
            margin-top: 34px;
            gap: 40px;

            display: flex;
            justify-content: center;

            img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
        }

        p {
            color: #060606;
            font-weight: 400;
            line-height: 23px;
            text-align: center;
            margin-top: 21px;

            a {
                text-decoration: none;
                font-weight: 700;
                line-height: 23px;
            }
        }
    }
`

export const DivInput = styled.div`
    div {
        border-radius: 25px;

        display: flex;
        align-items: center;

        > span {
            border-radius: 25px 0px 0px 25px;
            width: 44px;
            background: ${({ theme }) => theme.colors.primary};
            height: 100%;
            
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                color: ${({ theme }) => theme.colors.standard.white};
                font-size: 15px;
            }
        }

        button {
            margin-left: -34px;
            border: none;
            border-radius: 25px;
            background: none;
            height: 25px;
            padding: 5px;
            transition: 0.25s;

            svg {
                font-size: 16px;
                color: #2e2e2e;
            }

            :hover {
                background: #ddd;
            }
        }
    }

    input {
        width: 18rem;
        height: 2.25rem;
        border-radius: 0px 25px 25px 0px;
        padding-left: 7px;
        border: 1px solid #d7d7d7;
        outline: none;
        font-size: 15px;
        
        :focus {
            border: none;
            background: rgba(133, 113, 255, 0.18);
        }
        
        ::placeholder {
            color: rgba(0, 0, 0, 0.7);
            opacity: 0.7;
            font-size: 14px;
        }
    }
`