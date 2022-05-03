import { useState } from 'react'

import Loading from '../loading'
import PageContainer from '../pageContainer'
import SearchBar from '../searchBar'
import PageContent from './pageContent'
import ButtonsContainer from './buttonsContainer'
import * as changeTestsVisibility from '../../helpers/testsHiddenHelper'


const TestsPage = ({ type }) => {
	const [testsData, setTestsData] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const handleHeadersClick = ({ termId, disciplineId, teacherId }) => {
		const changeVisibilityFunction = {
			'disciplines': changeTestsVisibility.changeDisciplineTestsVisibility,
			'teachers': changeTestsVisibility.changeTeacherTestsVisibility
		}

		const newTests = changeVisibilityFunction[type]({
			testsData,
			termId,
			disciplineId,
			teacherId,
		})

		setTestsData(newTests)
	}


	return (
		<PageContainer>
			<SearchBar
				type={type}
				setTestsData={setTestsData}
				isLoading={isLoading}
				setIsLoading={setIsLoading}
			/>

			<ButtonsContainer
				isDisable={isLoading}
				type={type}
			/>
			
			{
				Boolean(isLoading)
					? <Loading />
					: <PageContent
						type={type}
						testsData={testsData}
						handleHeadersClick={handleHeadersClick}
					/>
			}
		</PageContainer>
	)
}


export default TestsPage

