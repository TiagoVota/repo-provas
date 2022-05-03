import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'

import {
	Login,
	SignUp,
	Disciplines,
	Teachers,
	AddTest,
} from './pages/index'


const PagesRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />}/>
				<Route path='/sign-up' element={<SignUp />}/>
				<Route path='/disciplines' element={<Disciplines />}/>
				<Route path='/teachers' element={<Teachers />}/>
				<Route path='/add-test' element={<AddTest />}/>
			</Routes>
		</Router>
	)
}


export default PagesRoutes
