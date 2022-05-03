import styled from 'styled-components'


const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;

	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`


export {
	Container,
}

