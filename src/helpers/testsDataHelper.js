const sanitizeDisciplineTests = (disciplineTestsData) => {
	const { terms } = disciplineTestsData
	const newTerms = terms.map(term => {
		const newDisciplines = term?.disciplines.map(discipline => {

			return { ...discipline, isOpen: false }
		})

		return { ...term, disciplines: newDisciplines, isOpen: false }
	})

	return { terms: newTerms }
}


const sanitizeTeachersTests = (teachersTestsData) => {
	const { teachers } = teachersTestsData
	const newTeachers = teachers.map(teacher => {
		return { ...teacher, isOpen: false }
	})

	return { teachers: newTeachers }
}


export {
	sanitizeDisciplineTests,
	sanitizeTeachersTests,
}
