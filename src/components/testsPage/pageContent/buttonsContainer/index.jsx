import { useNavigate } from 'react-router-dom'

import { successModal } from '../../../../factories/modalFactory'

import { Button, Container } from './styles'


const ButtonsContainer = ({ type }) => {
	const navigate = useNavigate()

	const isDisciplinePage = Boolean(type === 'disciplines')

	const handleDisciplineClick = () => navigate('/disciplines')
	const handleTeacherClick = () => navigate('/teachers')
	const handleAddClick = () => successModal('Funcionalidade logo chegando!')

	return (
		<Container>
			<Button
				isSelected={isDisciplinePage}
				onClick={handleDisciplineClick}
			>
				DISCIPLINAS
			</Button>

			<Button
				isSelected={!isDisciplinePage} width={'180px'}
				onClick={handleTeacherClick}
			>
				PESSOA INSTRUTORA
			</Button>

			<Button
				onClick={handleAddClick}
			>
				ADICIONAR
			</Button>
		</Container>
	)
}


export default ButtonsContainer
