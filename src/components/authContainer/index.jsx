import { Container, Logo } from './styles'

import logo from '../../assets/images/logo.svg'


const AuthContainer = ({ children: content }) => {
	return (
		<Container>
			<Logo src={logo} alt="logo image" />

			{content}
		</Container>
	)
}


export default AuthContainer
