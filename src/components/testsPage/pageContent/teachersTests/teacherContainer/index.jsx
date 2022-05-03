import DropDownIcon from '../../dropDownIcon'
import CategoryContainer from './categoryContainer'

import {
	SectionWrapper,
	SectionHeader,
	SectionContainer,
} from '../../components'
import NoTests from '../../noTests'


const TeacherContainer = ({ teacherInfo, handleHeadersClick }) => {
	const { teacherId, name, categories, isOpen } = teacherInfo

	const headerHeight = '40px'

	const changeTeacherVisibility = () => {
		handleHeadersClick({ teacherId })
	}

	
	if (categories.length === 0) return <></>
	return (
		<SectionContainer minHeight={headerHeight} isPrincipal >
			<SectionHeader height={headerHeight} onClick={changeTeacherVisibility} >
				{name}

				<DropDownIcon isDown={!isOpen} />
			</SectionHeader>
			
			<SectionWrapper isHidden={!isOpen} >
				{
					categories.map(category => <CategoryContainer
						key={category.categoryId}
						categoryInfo={category}
					/>)
				}
			</SectionWrapper>
		</SectionContainer>
	)
}


export default TeacherContainer
