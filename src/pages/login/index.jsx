import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import { handleValidation } from '../../validations/handleValidation'
import { errorModal, successModal } from '../../factories/modalFactory'
import * as api from '../../services/api.auth'

import { loginSchema } from '../../schemas/userSchema'

import AuthContainer from '../../components/authContainer'

import {
	FormContainer,
	Title,
	Form,
	Input,
	Label,
	ChangePageWrapper,
	Button,
	RedirectLink,
} from '../../components/formComponents'


const Login = () => {
	const { auth, login } = useAuth()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({})

	useEffect(() => {
		if (auth & auth?.token) goHomepage()
	}, [])

	const changeFormData = (atribute, value) => {
		const newFormData = { ...formData }
		newFormData[atribute] = value

		setFormData(newFormData)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const body = {
			...formData,
			email: formData.email?.toLowerCase(),
		}
		
		const {isValid, error} = handleValidation(body, loginSchema)
		if (!isValid) return errorModal(error)

		api.postLogin(body)
			.then(({ data: token }) => {
				successModal('Login realizado!')
				login({ token })
				goHomepage()
			}).catch(({ request: { status }}) => handleFailLogin(status))
	}

	const handleFailLogin = (status) => {
		const msgStatus = {
			401: 'Senha incorreta!',
			404: 'E-mail não encontrado!',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const goHomepage = () => {
		setFormData({})
		navigate('/disciplines')
	}


	return (
		<AuthContainer>
			<FormContainer>
				<Title>Login</Title>

				<Form onSubmit={handleSubmit}>
					<Label htmlFor='E-mail'>E-mail:</Label>
					<Input
						id='E-mail'
						placeholder='Ex: meulindoemail@email.com'
						type='email'
						onChange={({ target: { value }}) => changeFormData('email', value)}
						value={formData.email}
						required
					/>

					<Label htmlFor='Senha'>Senha:</Label>
					<Input
						id='Senha'
						placeholder='Ex: Senha!123'
						type='password'
						onChange={({ target: { value }}) => changeFormData('password', value)}
						value={formData.password}
						required
					/>

					<ChangePageWrapper>
						<RedirectLink to='/sign-up'>
							Não possuo cadastro
						</RedirectLink>

						<Button type='submit'>
							Entrar
						</Button>
					</ChangePageWrapper>

				</Form>

			</FormContainer>
		</AuthContainer>
	)
}


export default Login
