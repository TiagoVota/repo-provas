import DisciplinesTests from './disciplinesTests'

import { Container } from './styles'


const PageContent = ({ type, testsData, handleHeadersClick }) => {
	if (testsData.length === 0) return <>Sem provas ainda ☹</>
	
	return (
		<Container>
			{
				Boolean(type === 'disciplines')
					? <DisciplinesTests
						testsData={testsData}
						handleHeadersClick={handleHeadersClick}
					/>
					: <></>
			}
		</Container>
	)
}


export default PageContent
