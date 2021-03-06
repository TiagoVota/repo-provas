import axios from 'axios'

import BASE_URL from './baseUrl'


const AUTH_URL = `${BASE_URL}/auth`

const postLogin = ({ email, password }) => {
	const body = { email, password }

	return axios.post(`${AUTH_URL}/login`, body)
}


const postSignUp = ({ name, email, password }) => {
	const body = { name, email, password }

	return axios.post(`${AUTH_URL}/sign-up`, body)
}


export {
	postLogin,
	postSignUp,
}
