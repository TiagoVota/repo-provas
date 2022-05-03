import TestContainer from '../../../components/testContainer'

import {
	SectionContainer,
	SectionHeader,
	SectionWrapper,
} from '../../../components'


const CategoryContainer = ({ categoryInfo }) => {
	const { name, tests } = categoryInfo

	const headerHeight = '30px'


	if (tests.length === 0) return <></>
	return (
		<SectionContainer minHeight={headerHeight} >
			<SectionHeader height={headerHeight} isNotClickable isTestHeader >
				{name}
			</SectionHeader>
			
			<SectionWrapper>
				{
					tests.map(test => <TestContainer
						key={test.testId}
						testInfo={test}
					/>)
				}
			</SectionWrapper>
		</SectionContainer>
	)
}


export default CategoryContainer
