import { useState } from 'react'

import useAuth from '../../hooks/useAuth'

import * as api from '../../services/api.tests'
import { errorModal } from '../../factories/modalFactory'

import { Form, FormContainer, Input } from '../formComponents'

import { Container, Line } from './styles'


const SearchBar = ({ type, setTestData, isLoading, setIsLoading }) => {
	const { auth: { token } } = useAuth()
	const [search, setSearch] = useState('')

	const placeholderFinal = Boolean(type === 'disciplines')
		? 'disciplina'
		: 'pessoa instrutora'
	const placeholderMsg = `Pesquise por ${placeholderFinal}`

	const handleSubmit = (event) => {
		event.preventDefault()

		const getTestsDict = {
			'disciplines': api.getDisciplineTests,
			'teachers': api.getTeachersTests
		}

		setIsLoading(true)
		getTestsDict[type]({ search, token })
			.then(({ data: testData }) => setTestData(testData))
			.catch(({ request: { status }}) => handleFailGetTests(status))
			.finally(() => setIsLoading(false))
	}

	const handleFailGetTests = (status) => {
		const msgStatus = {
			401: 'Acesso negado, por favor tente <a href=\'/\'>entrar</a> novamente!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}


	return (
		<Container>
			<FormContainer>
				<Form onSubmit={handleSubmit}>
					<Input
						id='search'
						placeholder={placeholderMsg}
						type='text'
						onChange={({ target: { value }}) => setSearch(value)}
						value={search}
						isDisable={isLoading}
						required
					/>
				</Form>
			</FormContainer>

			<Line />
		</Container>
	)
}


export default SearchBar

