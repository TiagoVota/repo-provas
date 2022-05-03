import { useNavigate } from 'react-router-dom'
import { IoLogOutOutline } from 'react-icons/io5'

import useAuth from '../../hooks/useAuth.jsx'

import { successModal } from '../../factories/modalFactory'

import { Button, Container, Logo } from './styles'

import logo from '../../assets/images/logo.svg'


const Header = () => {
	const { logout } = useAuth()
	const navigate = useNavigate()

	const handleExit = () => {
		successModal('Logout realizado!')
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
