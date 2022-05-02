import DropDownIcon from '../../../dropDownIcon'
import CategoryContainer from './categoryContainer'

import {
	SectionContainer,
	SectionHeader,
	SectionWrapper
} from '../../../components'


const DisciplineContainer = ({ disciplineInfo, changeVisibility }) => {
	const { name, categories, isOpen } = disciplineInfo
	
	const headerHeight = '40px'


	return (
		<SectionContainer minHeight={headerHeight} >
			<SectionHeader height={headerHeight} onClick={changeVisibility} >
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


export default DisciplineContainer
