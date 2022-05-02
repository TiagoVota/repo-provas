import DropDownIcon from '../../../dropDownIcon'

import {
	SectionContainer,
	SectionHeader,
	SectionWrapper
} from '../../../components'


const DisciplineContainer = ({ disciplineInfo }) => {
	const { name, categories, isOpen } = disciplineInfo
	
	const headerHeight = '40px'


	return (
		<SectionContainer minHeight={headerHeight}>
			<SectionHeader height={headerHeight}>
				{name}

				<DropDownIcon isDown={!isOpen} />
			</SectionHeader>
					
			<SectionWrapper isHidden={!isOpen}>
				{
					Boolean(categories.length > 0)
						?
						categories.map(category => {
							console.log('inferno')
							if (!category) return

							return(
								<SectionContainer
									key={category?.categoryId}
								>
									<SectionHeader>
										{category?.name}

									</SectionHeader>
					

					
								</SectionContainer>
							)
						})
						: <></>
				}
			</SectionWrapper>

		</SectionContainer>
	)
}


export default DisciplineContainer
