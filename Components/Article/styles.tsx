import styled from "styled-components";

export const ArticleCard = styled.li`
    width: 100%;
    height: auto;
    background: #FFFFFF;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.06);
    border-radius: 25px;
    padding: 20px 15px;
    display: grid;
    grid-gap: 1em;
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;

    img {
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

    small {
        display: flex;
        flex-direction: column;

        strong {
            width: 125px;
            font-style: normal;
            font-weight: 400;
            font-size: ${({ theme }) => theme.fontSize.small};
            line-height: 133%;
            color: #000000;
            opacity: 0.5;
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
    }

    button {
        color: ${({ theme }) => theme.colors.primary};
        width: 100px;
        height: 40px;
        background: ${({ theme }) => theme.colors.standard.white};
        border-radius: 25px;
        border: none;
        font-weight: 700;
        box-shadow: 1px 5px 10px 0 rgba(0, 0, 0, 0.1);
        transition: 0.2s;
    }

    button:hover {
        background: #f8f8f8;
    }
`
export const CardBody = styled.div`
    h3 {
        height: 40px;
        margin-bottom: 1em;
    }
    img {
        border-radius: 25px;
        width: 100%;
        height: 160px;
        object-fit: cover;
    }
`
export const CardFooter = styled.div`
    button {
        background: none;
        border: none;
        margin-right: 1em;
        cursor: pointer;

        svg {
            font-size: 20px;
            opacity: 0.5;
        }
    }
`

