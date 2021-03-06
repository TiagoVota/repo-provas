import { useEffect, useState } from 'react'

import useAuth from '../../hooks/useAuth'

import * as api from '../../services/api.tests'
import * as sanitizeTests from '../../helpers/testsDataHelper'
import { errorModal } from '../../factories/modalFactory'

import { Form, FormContainer, Input } from '../formComponents'

import { Container, Line } from './styles'


const SearchBar = ({ type, setTestsData, isLoading, setIsLoading }) => {
	const { auth: { token } } = useAuth()
	const [search, setSearch] = useState('')

	useEffect(() => {
		makeSearch({ search: 'all', token })
	}, [])

	const placeholderFinal = Boolean(type === 'disciplines')
		? 'disciplina'
		: 'pessoa instrutora'
	const placeholderMsg = `Pesquise por ${placeholderFinal}`

	const handleSubmit = (event) => {
		event.preventDefault()

		makeSearch({ search, token })
	}

	const makeSearch = ({ search, token }) => {
		const functions = {
			getTests: {
				'disciplines': api.getDisciplineTests,
				'teachers': api.getTeachersTests,
			},
			sanitizeTests: {
				'disciplines': sanitizeTests.sanitizeDisciplineTests,
				'teachers': sanitizeTests.sanitizeTeachersTests,
			}
		}

		const finalSearch = handleSearch(search)

		setIsLoading(true)
		functions.getTests[type]({ search: finalSearch, token })
			.then(({ data }) => {
				const sanitizedTests = functions.sanitizeTests[type](data)
				setTestsData(sanitizedTests)
			})
			.catch(({ request: { status }}) => handleFailGetTests(status))
			.finally(() => setIsLoading(false))
	}

	const handleSearch = (search) => {
		const isAllSearch = search === 'all'
		return Boolean(isAllSearch) ? '' : search
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
					/>
				</Form>
			</FormContainer>

			<Line />
		</Container>
	)
}


export default SearchBar
