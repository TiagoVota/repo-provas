import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const TESTS_URL = `${BASE_URL}/tests`

const getDisciplineTests = ({ search, token }) => {
	const endpoint = `${TESTS_URL}/discipline?search=${search}`
	return axios.get(endpoint, makeConfig(token))
}


const getTeachersTests = ({ search, token }) => {
	const endpoint = `${TESTS_URL}/teacher?search=${search}`
	return axios.get(endpoint, makeConfig(token))
}


const getInsertTestInfo = ({ token }) => {
	return axios.get(`${TESTS_URL}/insert-info`, makeConfig(token))
}


const postTest = ({ testInsertInfo, token }) => {
	const { name, pdfUrl, categoryId, teacherDisciplineId } = testInsertInfo
	const body = { name, pdfUrl, categoryId, teacherDisciplineId }
	return axios.post(`${TESTS_URL}`, body, makeConfig(token))
}


const addTestView = ({ testId, token }) => {
	const endpoint = `${TESTS_URL}/${testId}/views/add`
	const emptyBody = {}
	return axios.patch(endpoint, emptyBody, makeConfig(token))
}


export {
	getDisciplineTests,
	getTeachersTests,
	getInsertTestInfo,
	postTest,
	addTestView,
}
