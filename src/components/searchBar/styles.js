import styled from 'styled-components'

import { headerHeight, SearchBarHeight } from '../../utils/sharedSizes'


const Container = styled.div`
	width: 100%;
	height: ${SearchBarHeight};

	position: fixed;
	top: ${headerHeight};
	left: 0px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Line = styled.div`
	width: 100%;
	height: 1px;
	margin-top: 10px;

	background-color: #C4C4C4;
`



export {
	Container,
	Line,
}

