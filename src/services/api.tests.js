import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const TESTS_URL = `${BASE_URL}/tests`

const getDisciplineTests = ({ search, token }) => {
	const endpoint = `${TESTS_URL}/tests/disciplines?search=${search}`
	return axios.get(endpoint, makeConfig(token))
}


const getTeachersTests = ({ search, token }) => {
	const endpoint = `${TESTS_URL}/tests/teachers?search=${search}`
	return axios.get(endpoint, makeConfig(token))
}


export {
	getDisciplineTests,
	getTeachersTests,
}
