import styled from 'styled-components'

export const Container = styled.div`
    > div {
        margin-top:  86px;

        h2 {
            text-align: center;
            margin: auto;
            width: 470px;
            height: 36px;
            left: 625px;
            top: 984px;
            font-family: roboto;
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 112%;
            margin-bottom: 15px;

            color: #000000;
        }

        p {
            width: 589px;
            height: 52px;
            left: 569px;
            top: 1041px;

            font-family: roboto;
            margin: auto;
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 133%;
            text-align: center;
            color: rgba(0, 0, 0, 0.7);
            opacity: 0.7;
        }
    }
`
export const Card = styled.section`
    > button {
        width: 130px;
        height: 42px;
        border: none;
        background: #FFFFFF;
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
        margin-top: 50px;
        list-style: none;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        li {
            width: 260px;
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
                        height: 17px;
                        font-family: roboto;
                        font-style: normal;
                        font-weight: 400;
                        font-size: ${({ theme }) => theme.fontSize.extraSmall};
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
                        font-size: ${({ theme }) => theme.fontSize.xxsmal};
                        line-height: 133%;
                        color: #000000;
                        opacity: 0.5;
                        margin-top: 8px;
                    }
                }
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
