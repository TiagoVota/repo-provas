import styled from 'styled-components'


const Container = styled.div`
	width: 100%;
	padding: 20px 0px;
	margin-bottom: 15px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Button = styled.button`
	width: ${p => p.width || '119px'};
	height: 36px;

	color: ${p => p.isSelected ? '#FFFFFF' : '#1976D2'};
	
	background-color: ${p => p.isSelected ? '#1976D2' : 'transparent'};

	border: 1px solid #1976D2;

	${p => p.isSelected ? '' : 'box-shadow: none;'}
`


export {
	Container,
	Button,
}

