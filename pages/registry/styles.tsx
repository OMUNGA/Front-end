import styled from 'styled-components'

export const StyledRegistry = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

            > a {
                font-weight: 700;
                line-height: 23px;
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    }
`

export const Form = styled.form`
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

    span {
        border-radius: 25px 0px 0px 25px;
        width: 44px;
        background: ${({ theme }) => theme.colors.primary};
            
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: ${({ theme }) => theme.colors.standard.white};
            font-size: 15px;
        }
    }
`

export const InputDiv = styled.div`
    display: flex;
    gap: 20px;
    
    input {
        width: 7rem;
    }

    div {
        display: flex;
    }
`

export const InputDivOne = styled.div`
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
        display: flex;
    }

    button {
        width: 100%;
    }
`

export const InputPassword = styled.div`
    display: flex;
    align-items: center;

    button {
        margin-left: -34px;
        border: none;
        background: none;
        transition: 0.25s;
        padding: 5px;
        width: 25px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        svg {
            font-size: 16px;
            color: #2e2e2e;
        }

        :hover {
            background: #ddd;
        }
    }
`