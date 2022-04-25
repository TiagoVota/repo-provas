import styled from 'styled-components'

import { SearchBarHeight } from '../../../utils/sharedSizes'


const Container = styled.div`
	width: 60%;
	height: calc(100% - ${SearchBarHeight});
	margin-top: ${SearchBarHeight};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`


export {
	Container,
}

