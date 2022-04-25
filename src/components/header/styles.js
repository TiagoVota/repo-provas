import styled from 'styled-components'

import { headerHeight } from '../../utils/sharedSizes'
import { headerZIndex } from '../../utils/z-indexes'


const Container = styled.header`
	width: 100%;
	height: ${headerHeight};
	padding: 0px 55px;

	position: fixed;
	top: 0;
	left: 0;
	z-index: ${headerZIndex};

	display: flex;
	justify-content: space-between;
	align-items: center;

	font-weight: bold;
	font-size: 26px;
	line-height: 31px;
`

const Logo = styled.img`
	width: 292px;
	height: 63.5px;
`

const Button = styled.button`
	box-shadow: none;
	background-color: transparent;
`


export {
	Container,
	Logo,
	Button,
}

