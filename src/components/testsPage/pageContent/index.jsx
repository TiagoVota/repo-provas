import { haveTests } from '../../../helpers/haveTestsHelper'

import DisciplinesTests from './disciplinesTests'
import TeachersTests from './teachersTests'
import NoTests from './noTests'

import { Container } from './styles'


const PageContent = ({ type, testsData, handleHeadersClick }) => {
	if (!haveTests(testsData)) return <NoTests />
	return (
		<Container>
			{
				Boolean(type === 'disciplines')
					? <DisciplinesTests
						testsData={testsData}
						handleHeadersClick={handleHeadersClick}
					/>
					: <TeachersTests
						testsData={testsData}
						handleHeadersClick={handleHeadersClick}
					/>
			}
		</Container>
	)
}


export default PageContent
