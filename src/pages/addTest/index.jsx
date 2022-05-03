import { useEffect, useState } from 'react'

import useAuth from '../../hooks/useAuth'

import * as api from '../../services/api.tests'

import { errorModal } from '../../factories/modalFactory'

import ButtonsContainer from '../../components/testsPage/buttonsContainer'
import Loading from '../../components/loading'
import PageContainer from '../../components/pageContainer'
import PageTitle from './pageTitle'
import PageContent from './pageContent'


const AddTest = () => {
	const { auth: { token } } = useAuth()
	const [testInsertInfo, setTestInsertInfo] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	
	const type = 'addTest'
	
	useEffect(() => {
		setIsLoading(true)
		api.getInsertTestInfo({ token })
			.then(({ data }) => setTestInsertInfo(data))
			.catch(({ request: { status }}) => handleFailGetTests(status))
			.finally(() => setIsLoading(false))
	}, [])

	const handleFailGetTests = (status) => {
		const msgStatus = {
			401: 'Acesso negado, por favor tente <a href=\'/\'>entrar</a> novamente!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}


	return (
		<PageContainer>
			<PageTitle />

			<ButtonsContainer
				isDisable={isLoading}
				type={type}
			/>
			
			{
				Boolean(isLoading)
					? <Loading />
					: <PageContent
						testInsertInfo={testInsertInfo}
					/>
			}
		</PageContainer>
	)
}


export default AddTest

