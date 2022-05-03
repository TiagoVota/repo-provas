import { SectionWrapper } from '../components'

import TermContainer from './termContainer'


const DisciplinesTests = ({ testsData, handleHeadersClick }) => {
	const { terms } = testsData


	return (
		<SectionWrapper isPrincipal>
			{
				terms.map(term => <TermContainer
					key={term.termId}
					termInfo={term}
					handleHeadersClick={handleHeadersClick}
				/>)
			}
		</SectionWrapper>
	)
}


export default DisciplinesTests
