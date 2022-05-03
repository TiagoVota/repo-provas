import useAuth from '../../../../../hooks/useAuth'

import * as api from '../../../../../services/api.tests'
import { openInNewTab } from '../../../../../utils/openUrl'

import { TestBox } from '..'
import { useState } from 'react'


const TestContainer = ({ testInfo }) => {
	const { testId, name, pdfUrl, views, discipline, teacher } = testInfo
	const { auth: { token } } = useAuth()
	const [pdfViews, setPdfViews] = useState(views)

	const teacherOrDisciplineName = discipline?.name || teacher?.name

	const handleClick = () => {
		openInNewTab(pdfUrl)

		setPdfViews(pdfViews + 1)
		api.addTestView({ testId, token })
			.then(({ data }) => setPdfViews(data.views))
			.catch(() => setPdfViews(pdfViews))
	}


	return (
		<TestBox onClick={handleClick} >
			{`${name} (${teacherOrDisciplineName}) [${pdfViews} views]`}
		</TestBox>
	)
}


export default TestContainer
