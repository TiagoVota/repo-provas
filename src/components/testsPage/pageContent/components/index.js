import styled from 'styled-components'


const SectionWrapper = styled.div`
	width: 100%;
	padding: ${p => p.isPrincipal ? '3px' : '0px'};

	display: ${p => p.isHidden ? 'none' : 'flex'};
	flex-direction: column;
	justify-content: start;
	align-items: center;

	gap: ${p => p.isPrincipal ? '17px' : '0px'};

	:last-child {
    margin-bottom: 5px;
	}
`

const SectionContainer = styled.div`
	width: 100%;
	min-height: ${p => p.minHeight || '50px'};
	padding: 0px 20px;

	display: flex;
	flex-direction: column;
	align-items: center;

	background: #FFFFFF;
	border-radius: 4px;

	box-shadow: ${p => p.isPrincipal ? '0px 1px 2px rgba(0, 0, 0, 0.5)' : 'none'};
`

const SectionHeader = styled.div`
	min-height: ${p => p.height || '50px'};
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	font-size: ${p => p.isTestHeader ? '12px' : 'inherit'};

	:hover {
		cursor: ${p => p.isNotClickable ? 'auto' : 'pointer'};
	}
`

const TestBox = styled.div`
	width: 100%;
	height: 30px;

	font-size: 12px;
	line-height: 24px;

	color: rgba(0, 0, 0, 0.5);

	:hover {
		cursor: pointer;
	}
`


export {
	SectionWrapper,
	SectionContainer,
	SectionHeader,
	TestBox,
}

