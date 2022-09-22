import styled from 'styled-components';

export const Container = styled.div`
    > div {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 25px 25px 0 0;
        position: relative;
    }

    button {
        position: relative;
       color: red;
       left: 50px;
       top: -30px;
    }
    
`

export const Content = styled.section`
    div {
        img {
            border: 1px solid black;
        }
    }
`