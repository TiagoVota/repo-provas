const changeDisciplineTestsVisibility = ({
	testsData,
	termId,
	disciplineId,
}) => {
	const copyTestsData = JSON.parse(JSON.stringify(testsData))

	const termIndex = copyTestsData.terms
		.findIndex(term => term.termId === termId)
	const termLayer = copyTestsData.terms[termIndex]

	const disciplineIndex = termLayer.disciplines
		.findIndex(discipline => discipline.disciplineId === disciplineId)
	const disciplineLayer = termLayer.disciplines[disciplineIndex]

	const actualLayer = Boolean(disciplineLayer) ? disciplineLayer : termLayer
	const actualState = actualLayer.isOpen
	
	actualLayer.isOpen = !actualState

	return copyTestsData
}

const changeTeacherTestsVisibility = ({ testsData, teacherId }) => {
	const copyTestsData = JSON.parse(JSON.stringify(testsData))

	const teacherIndex = copyTestsData.teachers
		.findIndex(teacher => teacher.teacherId === teacherId)
	const teacherLayer = copyTestsData.teachers[teacherIndex]

	const actualLayer = teacherLayer
	const actualState = actualLayer.isOpen
	
	actualLayer.isOpen = !actualState

	return copyTestsData
}


export {
	changeDisciplineTestsVisibility,
	changeTeacherTestsVisibility,
}
