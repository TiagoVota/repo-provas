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




export {
	sanitizeDisciplineTests
}
