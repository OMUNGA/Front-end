import styled from 'styled-components'

interface containerProps {
	display: string;
}
export const Container= styled.div<containerProps>`
	width: 1400px;
	margin: 0 auto;
	
	display: ${props=> props.display || "block"};
	
	@media(max-width: ${({theme}) => theme.tablet}) {
		width: 80%;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 85%;
	}

	@media(max-width: 783px) {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 768px) {
        display: flex;
        align-items: center;
    }

	@media(max-width: 783px) {
		width: 100%;
	}
`