import { useNavigate } from 'react-router-dom'

import { successModal } from '../../../factories/modalFactory'

import { Button, Container } from './styles'


const ButtonsContainer = ({ type, isDisable }) => {
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
				disable={isDisable}
				isDisable={isDisable}
			>
				DISCIPLINAS
			</Button>

			<Button
				isSelected={!isDisciplinePage} width={'180px'}
				onClick={handleTeacherClick}
				disable={isDisable}
				isDisable={isDisable}
			>
				PESSOA INSTRUTORA
			</Button>

			<Button
				onClick={handleAddClick}
				disable={isDisable}
				isDisable={isDisable}
			>
				ADICIONAR
			</Button>
		</Container>
	)
}


export default ButtonsContainer
