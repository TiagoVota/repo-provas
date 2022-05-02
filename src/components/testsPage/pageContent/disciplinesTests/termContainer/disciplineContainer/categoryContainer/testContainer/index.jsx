import { openInNewTab } from '../../../../../../../../utils/openUrl'

import { TestBox } from '../../../../../components'


const TestContainer = ({ testInfo }) => {
	const { name, pdfUrl, teacher } = testInfo

	const handleClick = () => openInNewTab(pdfUrl)


	return (
		<TestBox onClick={handleClick} >
			{`${name} (${teacher.name})`}
		</TestBox>
	)
}


export default TestContainer
