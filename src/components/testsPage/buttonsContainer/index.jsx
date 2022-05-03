import { useNavigate } from 'react-router-dom'

import { Button, Container } from './styles'


const ButtonsContainer = ({ type: pageType, isDisable }) => {
	const navigate = useNavigate()

	const isPageSelected = (type) => type === pageType

	const handleDisciplineClick = () => navigate('/disciplines')
	const handleTeacherClick = () => navigate('/teachers')
	const handleAddClick = () => navigate('/add-test')

	return (
		<Container>
			<Button
				isSelected={isPageSelected('disciplines')}
				onClick={handleDisciplineClick}
				disabled={isDisable}
				isDisable={isDisable}
			>
				DISCIPLINAS
			</Button>

			<Button
				isSelected={isPageSelected('teachers')}
				width={'180px'}
				onClick={handleTeacherClick}
				disabled={isDisable}
				isDisable={isDisable}
			>
				PESSOA INSTRUTORA
			</Button>

			<Button
				isSelected={isPageSelected('addTest')}
				onClick={handleAddClick}
				disabled={isDisable}
				isDisable={isDisable}
			>
				ADICIONAR
			</Button>
		</Container>
	)
}


export default ButtonsContainer
