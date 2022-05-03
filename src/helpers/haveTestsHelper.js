const haveTests = (testsData) => {
	const haveDisciplineTests = testsData?.terms?.some(term => {
		return term.disciplines.length > 0
	})
	
	const haveTeacherTests = testsData?.teachers?.some(teacher => {
		return teacher.categories.length > 0
	})

	return haveDisciplineTests || haveTeacherTests
}


export {
	haveTests,
}
