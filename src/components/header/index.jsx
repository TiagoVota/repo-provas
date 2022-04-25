import { useNavigate } from 'react-router-dom'
import { IoLogOutOutline } from 'react-icons/io5'

import useAuth from '../../hooks/useAuth.jsx'

import * as api from '../../services/api.auth'
import { successModal } from '../../factories/modalFactory'

import { Button, Container, Logo } from './styles'

import logo from '../../assets/images/logo.svg'


const Header = () => {
	const { auth: { token }, logout } = useAuth()
	const navigate = useNavigate()

	const handleExit = () => {
		api.makeLogout({ token })
			.finally(() => {
				successModal('Logout realizado!')
				goLoginPage()
			})
	}

	const goLoginPage = () => {
		navigate('/')
		logout()
	}


	return (
		<Container>
			<Logo src={logo} alt='logo image' />

			<Button onClick={handleExit}>
				<IoLogOutOutline size={'36px'} />
			</Button>
		</Container>
	)
}


export default Header
