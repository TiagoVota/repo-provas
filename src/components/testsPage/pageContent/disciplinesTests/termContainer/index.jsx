import DropDownIcon from '../../dropDownIcon'
import DisciplineContainer from './disciplineContainer'

import {
	SectionWrapper,
	SectionHeader,
	SectionContainer,
} from '../../components'


const TermContainer = ({ termInfo, handleHeadersClick }) => {
	const { termId, number, disciplines, isOpen } = termInfo

	const changeTermVisibility = () => {
		handleHeadersClick({ termId })
	}

	const changeDisciplineVisibility = (disciplineId) => {
		handleHeadersClick({ termId, disciplineId })
	}


	if (disciplines.length === 0) return <></>
	return (
		<SectionContainer isPrincipal>
			<SectionHeader onClick={changeTermVisibility} >
				{`${number}º Período`}

				<DropDownIcon isDown={!isOpen} />
			</SectionHeader>

			<SectionWrapper isHidden={!isOpen}>
				{
					disciplines.map(discipline => <DisciplineContainer
						key={discipline.disciplineId}
						disciplineInfo={discipline}
						changeVisibility={() => {
							return changeDisciplineVisibility(discipline.disciplineId)
						}}
					/>)
				}
			</SectionWrapper>

		</SectionContainer>
	)
}


export default TermContainer
