import styled from 'styled-components'

import { searchBarHeight } from '../../../utils/sharedSizes'


const Container = styled.div`
	width: 100%;
	padding: 20px 0px;
	margin-top: ${searchBarHeight};
	margin-bottom: 15px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Button = styled.button`
	width: ${p => p.width || '119px'};
	height: 36px;

	color: ${p => p.isSelected ? '#FFFFFF' : '#1976D2'};
	
	background-color: ${p => p.isSelected ? '#1976D2' : 'transparent'};

	border: 1px solid #1976D2;

	${p => p.isSelected ? '' : 'box-shadow: none;'}

	@media(max-width: 650px) {
		border-radius: 0px;
	}
`


export {
	Container,
	Button,
}

