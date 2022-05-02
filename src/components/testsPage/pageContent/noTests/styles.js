import styled from 'styled-components'


const Container = styled.div`
	width: 100%;
	height: 30px;

	display: flex;
	justify-content: center;
	align-items: center;
	/* text-align: center; */

	font-size: ${p => p.isLowerFont ? '12px' : 'inherit'};
	color: ${p => p.isLowerFont ? 'rgba(0, 0, 0, 0.5)' : 'inherit'};
`


export {
	Container,
}

