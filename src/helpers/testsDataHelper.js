const sanitizeDisciplineTests = (testData) => {
	const output = testData.map(term => {
		const newDisciplines = term?.disciplines.map(discipline => {
			const newCategories = discipline?.tests.map(category => {

				return { ...category, isOpen: false }
			})
			return { ...discipline, categories: newCategories, isOpen: false }
		})
		return { ...term, disciplines: newDisciplines, isOpen: false }
	})

	return output
}


export {
	sanitizeDisciplineTests
}
