import styled from 'styled-components'

export const ArticleSection = styled.section`

        padding-top: 0px;
        margin-top: -50px;
        //border: 1px solid black;
        h2 {
            font-style: normal;
            font-size: ${({theme})=> theme.fontSize.title};
        }

        p {
            width: 589px;
            font-family: roboto;
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
`
export const Card = styled.div`
    > button {
        width: 130px;
        height: 42px;
        border: none;
        background: ${({theme})=> theme.colors.standard.white};
        color: ${({theme})=> theme.colors.standard.dark};;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 25px;
        transition: 0.2s;
        cursor: pointer;

        margin-left: auto;

        display: flex;
        align-items: center;
        justify-content: center;

        span {
            margin-right: 10px;
            font-weight: 600;
            font-size: 15px;
        }
    }

    > button:hover {
        background: #eee;
    }

    ul {
        margin-top: 60px;
        list-style: none;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3em;

        li {
            width: 100%;
            height: 390px;
            background: #FFFFFF;
            box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.06);
            border-radius: 25px;

            padding: 20px 15px;

            div {
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
                        font-family: roboto;
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

                        font-family: roboto;
                        font-style: normal;
                        font-weight: 400;
                        font-size: ${({ theme }) => theme.fontSize.extraSmall};
                        line-height: 133%;
                        color: #000000;
                        opacity: 0.5;
                    }
                }
            }

            h3 {
                margin: 1.5em 0;
                height: 40px;
            }
            p {
                height: 68px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                line-height: 133%;
                width: 100%;
                font-size: 16px;
                color: rgba(0, 0, 0, 0.7);
                margin: 14px 0px 15px 0px;
            }

            img {
                border-radius: 25px;
                width: 100%;
                height: 160px;
                object-fit: cover;
            }

            > small {
                button {
                    background: none;
                    border: none;
                    margin-top: 17px;
                    margin-right: 15px;
                    cursor: pointer;

                    svg {
                        font-size: 20px;
                        opacity: 0.5;
                    }
                }
            }
        }
    }

    .ver-todos {
        margin: auto;
        margin-top: 75px;
    }
`
