import styled from 'styled-components'

import { headerHeight } from '../../utils/sharedSizes'


const Container = styled.div`
	width: 100%;
	height: calc(100% - ${headerHeight});
	margin-top: ${headerHeight};
	
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export {
	Container,
}
