import { useState, createContext } from 'react'

const AuthContext = createContext()


const AuthProvider = ({ children }) => {
	const defaultAuth = { name: 'Fulano' }
	const persistedAuth = JSON.parse(localStorage.getItem('auth'))
	const [auth, setAuth] = useState(persistedAuth || defaultAuth)

	const login = (authData) => {
		setAuth(authData)
		localStorage.setItem('auth', JSON.stringify(authData))
	}

	const logout = () => {
		setAuth(defaultAuth)
		localStorage.removeItem('auth')
	}


	return (
		<AuthContext.Provider value={{ auth, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthContext
export {
	AuthProvider,
}
