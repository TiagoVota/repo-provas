import { SectionWrapper } from '../components'

import TeacherContainer from './teacherContainer'


const TeachersTests = ({ testsData, handleHeadersClick }) => {
	const { teachers } = testsData


	return (
		<SectionWrapper isPrincipal>
			{
				teachers.map(teacher => <TeacherContainer
					key={teacher.teacherId}
					teacherInfo={teacher}
					handleHeadersClick={handleHeadersClick}
				/>)
			}
		</SectionWrapper>
	)
}


export default TeachersTests
