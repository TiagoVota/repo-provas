import * as Loaders from 'react-loader-spinner'

import { Container } from './styles'


const LoaderSpinner = ({ type, color, height, width, heightDiscount }) => {
	const Loader = Loaders[type || 'ThreeDots']
	
	return (
		<Container heightDiscount={heightDiscount || '0px'}>
			<Loader
				color={color || 'rgba(0, 0, 0, 0.8)'}
				height={height || width || '100'}
				width={width || height || '100'}
			/>
		</Container>
	)
}


export default LoaderSpinner



