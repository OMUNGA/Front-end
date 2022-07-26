import styled from 'styled-components'

export const Container = styled.div`
	width: 1100px;
	margin: 0 auto;
	

	@media(max-width: ${({theme}) => theme.tablet}) {
		width: 80%;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 85%;
	}
`