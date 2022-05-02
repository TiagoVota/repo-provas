import { openInNewTab } from '../../../../../../../utils/openUrl'

import { TestBox } from '../../../../components'


const TestContainer = ({ testInfo }) => {
	const { name, pdfUrl, discipline } = testInfo

	const handleClick = () => openInNewTab(pdfUrl)


	return (
		<TestBox onClick={handleClick} >
			{`${name} (${discipline.name})`}
		</TestBox>
	)
}


export default TestContainer
