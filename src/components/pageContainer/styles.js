import styled from 'styled-components'

import { headerHeight } from '../../utils/sharedSizes'


const Container = styled.div`
	width: 60%;
	height: calc(100vh - ${headerHeight});
	margin-left: 20vw;
	margin-top: ${headerHeight};
	
	display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

	@media(max-width: 650px) {
		width: 100%;
		margin-left: 0px;
	}
`


export {
	Container,
}
