import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from '../../../hooks/useAuth'

import * as api from '../../../services/api.tests'
import { handleValidation } from '../../../validations/handleValidation'
import { errorModal, successModal } from '../../../factories/modalFactory'

import { addTesteSchema } from '../../../schemas/testSchema'

import {
	Button,
	Container,
	Form,
	FormContainer,
	Input,
	Label,
	Select
} from './styles'


const PageContent = ({ testInsertInfo }) => {
	const { auth: { token } } = useAuth()
	const { categories, disciplineAndTeachers } = testInsertInfo
	if (!categories || categories.length === 0) {
		return(
			<>Problemas com adição de prova!</>
		)
	}
	const [isLoading, setIsLoading] = useState(false)
	const [name, setName] = useState('')
	const [pdfUrl, setPdfUrl] = useState('')
	const [category, setCategory] = useState('')
	const [discipline, setDiscipline] = useState('')
	const [teacher, setTeacher] = useState('')
	const navigate = useNavigate()

	const categoryList = [{id: 0, name: 'Categoria'}, ...categories]
	
	const disciplineList = [
		{disciplineId: 0, name: 'Disciplina'},
		...disciplineAndTeachers
	]

	const mockTeachersList = [{ teacherId: 0, name: 'Pessoa Instrutora' }]
	const actualDiscipline = disciplineAndTeachers.find(({ name }) => name === discipline) || { teachers: [] }
	const teacherList = [
		...mockTeachersList, ...actualDiscipline.teachers
	]

	const isCategorySelected = !['Categoria', ''].includes(category)
	const isDisciplineSelected = !['Disciplina', ''].includes(discipline)
	const isTeacherSelected = !['Pessoa Instrutora', ''].includes(teacher)
	const isAllSelected = isCategorySelected && isDisciplineSelected && isTeacherSelected

	const handleSubmit = (event) => {
		event.preventDefault()
		setIsLoading(true)

		const { id: categoryId } = categories.find(({ name }) => name === category)
		const { teachers } = disciplineAndTeachers.find(({ name }) => name === discipline )
		const { teacherDisciplineId } = teachers.find(({ name }) => name === teacher)

		const testInsertInfo = {
			name,
			pdfUrl,
			categoryId,
			teacherDisciplineId,
		}
		
		const {isValid, error} = handleValidation(testInsertInfo, addTesteSchema)
		if (!isValid) return errorModal(error)

		api.postTest({ testInsertInfo, token })
			.then(() => {
				successModal('Prova adicionada!')
				goHomepage()
			})
			.catch(({ request: { status }}) => handleFailSubmit(status))
			.finally(() => setIsLoading(false))
	}

	const handleFailSubmit = (status) => {
		const msgStatus = {
			401: 'Acesso negado, por favor tente <a href=\'/\'>entrar</a> novamente!',
			404: 'Categoria, professor ou disciplina não encontrado!',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const goHomepage = () => {
		clearForm()
		navigate('/disciplines')
	}

	const clearForm = () => {
		setName('')
		setPdfUrl('')
		setCategory('')
		setDiscipline('')
		setTeacher('')
	}

	const handleDisciplineChange = (discipline) => {
		setDiscipline(discipline)
		setTeacher('Pessoa Instrutora')
	}


	return (
		<Container>
			<FormContainer>
				<Form onSubmit={handleSubmit}>
					<Label htmlFor='name'>Título da prova:</Label>
					<Input
						id='name'
						placeholder='Ex: teste.com'
						type='text'
						onChange={({ target: { value }}) => setName(value)}
						value={name}
						required
					/>

					<Label htmlFor='pdfUrl'>PDF da prova:</Label>
					<Input
						id='pdfUrl'
						placeholder='Ex: https://www.deeplearningbook.org/'
						type='text'
						onChange={({ target: { value }}) => setPdfUrl(value)}
						value={pdfUrl}
						required
					/>

					<Label htmlFor='category'>Categoria:</Label>
					<Select
						name='category'
						value={category}
						onChange={({ target: { value }}) => setCategory(value)}
					>
						{
							categoryList.map(({ id, name }) => {
								return (
									<option key={id} value={name}>
										{name}
									</option>
								)}
							)
						}
					</Select>

					<Label htmlFor='discipline'>Disciplina:</Label>
					<Select
						name='discipline'
						value={discipline}
						onChange={({ target: { value }}) => handleDisciplineChange(value)}
					>
						{
							disciplineList.map(({ disciplineId, name }) => {
								return (
									<option key={disciplineId} value={name}>
										{name}
									</option>
								)}
							)
						}
					</Select>

					<Label htmlFor='teacher'>Pessoa Instrutora:</Label>
					<Select
						name='teacher'
						value={teacher}
						onChange={({ target: { value }}) => setTeacher(value)}
						isDisable={!isDisciplineSelected}
						disabled={!isDisciplineSelected}
					>
						{
							teacherList.map(({ teacherId, name }) => {
								return (
									<option key={teacherId} value={name}>
										{name}
									</option>
								)}
							)
						}
					</Select>

					<Button
						disabled={isLoading || !isAllSelected}
						isDisable={isLoading || !isAllSelected}
						type='submit'
					>
						ENVIAR
					</Button>
				</Form>
			</FormContainer>
		</Container>
	)
}


export default PageContent
