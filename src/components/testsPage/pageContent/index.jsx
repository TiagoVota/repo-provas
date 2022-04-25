import ButtonsContainer from './buttonsContainer'

import { Container } from './styles'


const PageContent = ({ type, testsData }) => {
	return (
		<Container>
			<ButtonsContainer type={type} />
		</Container>
	)
}


export default PageContent

