import styled from 'styled-components'

import { Link } from 'react-router-dom'


const FormContainer = styled.div`
	width: 40%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 15px;

	@media(max-width: 650px) {
		width: 100%;
		margin-top: 50px;
	}
`

const Title = styled.h1`
	font-size: 24px;
	line-height: 24px;
	letter-spacing: 0.15px;

	color: rgba(0, 0, 0, 0.8);
`

const Form = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
`

const Label = styled.label`
	font-size: 14px;
	line-height: 26px;
`

const Input = styled.input`
	width: 100%;
	height: 45px;
	margin-bottom: 5px;

	padding-left: 13px;
`

const ChangePageWrapper = styled.div`
	margin-top: 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Button = styled.button`
	width: 116px;
	height: 36px;

	color: #FFFFFF;

	border-width: 0px;
	background: #1877F2;
`

const RedirectLink = styled(Link)`
	font-size: 12px;
	line-height: 24px;
	text-decoration-line: underline;

	color: rgba(70, 115, 202, 0.8);
`


export {
	FormContainer,
	Title,
	Form,
	Input,
	Label,
	ChangePageWrapper,
	Button,
	RedirectLink,
}
