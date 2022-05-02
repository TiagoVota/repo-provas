import DropDownIcon from '../../dropDownIcon'
import DisciplineContainer from './disciplineContainer'

import {
	SectionWrapper,
	SectionHeader,
	SectionContainer,
} from '../../components'


const TermContainer = ({ termInfo }) => {
	const { number, disciplines, isOpen } = termInfo

	
	return (
		<SectionContainer isPrincipal>
			<SectionHeader>
				{`${number}º Período`}

				<DropDownIcon isDown={!isOpen} />
			</SectionHeader>

			<SectionWrapper isHidden={!isOpen}>
				{
					disciplines.map(discipline => <DisciplineContainer
						key={discipline.disciplineId}
						disciplineInfo={discipline}
					/>)
				}
			</SectionWrapper>

		</SectionContainer>
	)
}


export default TermContainer
