import { Container } from './styles'

import Header from '../../components/header'


const PageContainer = ({ children: content }) => {
	return (
		<>
			<Header />

			<Container>
				{content}
			</Container>
		</>
	)
}


export default PageContainer
