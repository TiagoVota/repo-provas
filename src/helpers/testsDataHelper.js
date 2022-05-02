const sanitizeDisciplineTests = (disciplineTestData) => {
	const { terms } = disciplineTestData
	const newTerms = terms.map(term => {
		const newDisciplines = term?.disciplines.map(discipline => {
			const newCategories = discipline?.categories.map(category => {
				return { ...category, isOpen: false }
			})

			return { ...discipline, categories: newCategories, isOpen: false }
		})

		return { ...term, disciplines: newDisciplines, isOpen: false }
	})

	return { terms: newTerms }
}




export {
	sanitizeDisciplineTests
}
