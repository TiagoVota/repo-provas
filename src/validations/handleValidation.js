import { messages } from 'joi-translation-pt-br'


const handleValidation = (object, objectSchema) => {
	const objectError = objectSchema.validate(object, { messages }).error
	const errorMessage = objectError?.details?.[0]?.message
	const error = Boolean(errorMessage) ? improveErrorText(errorMessage) : null
	
	return {
		isValid: !objectError,
		error
	}
}

const improveErrorText = (errorStr) => {
	const strReplaces = [
		['value', 'Formulário'],
		['[ref:password]', 'igual a "Senha"'],
		['name', 'Nome'],
		['email', 'E-mail'],
		['password', 'Senha'],
		['repeatPassword', 'Confirmação da senha'],
		['pdfUrl', 'PDF da prova'],
		['/^(http:\\/\\/)|(https:\\/\\/)/', 'Começar com "http://" ou "https://"']
	]

	return strReplaces.reduce((acc, rep) => acc.replace(rep[0], rep[1]), errorStr)
}


export {
	handleValidation,
}
