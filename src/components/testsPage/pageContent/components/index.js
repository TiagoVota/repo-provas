import styled from 'styled-components'


const PrincipalWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	gap: 17px;
`

const PrincipalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 12px;

	position: static;
	width: 100%;
	height: 248px;

	background: #FFFFFF;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
`


export {
	PrincipalWrapper,
	PrincipalContainer,
}

