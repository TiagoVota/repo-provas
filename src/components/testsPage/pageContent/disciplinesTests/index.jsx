import { SectionWrapper } from '../components'

import TermContainer from './termContainer'


const DisciplinesTests = ({ testData }) => {
	const { terms } = testData

	console.log(testData)

	return (
		<SectionWrapper isPrincipal>
			{
				terms.map(term => <TermContainer
					key={term.termId}
					termInfo={term}
				/>)
			}
			
		</SectionWrapper>
	)
}


export default DisciplinesTests

