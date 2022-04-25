import { useState } from 'react'

import Loading from '../loading'
import PageContainer from '../pageContainer'
import SearchBar from '../searchBar'
import PageContent from './pageContent'


const TestsPage = ({ type }) => {
	const [testData, setTestData] = useState([])
	const [isLoading, setIsLoading] = useState(false)


	return (
		<PageContainer>
			<SearchBar
				type={type}
				setTestData={setTestData}
				isLoading={isLoading}
				setIsLoading={setIsLoading}
			/>
			
			{
				Boolean(isLoading)
					? <Loading />
					: <PageContent
						type={type}
						testData={testData}
					/>
			}
		</PageContainer>
	)
}


export default TestsPage
