import styled from 'styled-components'

import {
	Container as PageContentContainer
} from '../../../components/testsPage/pageContent/styles'

import * as formComponents from '../../../components/formComponents'


const inputHeight = '56px'

const Container = styled(PageContentContainer)`

`

const FormContainer = styled(formComponents.FormContainer)`
	width: 100%;
`

const Input = styled(formComponents.Input)`
	height: ${inputHeight};
	margin-bottom: 10px;
`

const Select = styled.select`
	width: 100%;
	height: ${inputHeight};
	padding: 0px 20px;
	margin-bottom: 10px;

	font-size: 18px;
	line-height: 20px;

	border-radius: 5px;
	background-color: #FFFFFF;


	:focus {
		color: rgba(0, 0, 0, 0.9);
	}
`

const Button = styled(formComponents.Button)`
	height: 46px;
	width: 100%;
	margin-top: 15px;
	margin-bottom: 20px;

	color: #FFFFFF;

	background-color: #1976D2;
`

const Form = formComponents.Form
const Label = formComponents.Label


export {
	Container,
	FormContainer,
	Form,
	Label,
	Input,
	Select,
	Button,
}

