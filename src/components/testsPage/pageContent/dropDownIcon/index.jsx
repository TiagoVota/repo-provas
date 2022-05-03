import { IoChevronDown, IoChevronUp } from 'react-icons/io5'


const DropDownIcon = ({ isDown }) => {
	return (
		Boolean(isDown)
			? <IoChevronDown color='#8D8D8D' size='25px' />
			: <IoChevronUp color='#8D8D8D' size='25px' />
	)
}


export default DropDownIcon
