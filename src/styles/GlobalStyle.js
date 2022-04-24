import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
	
  html {
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 500;
    background-color: #FAFAFA;
  }

	button {
		padding: 0px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0.4px;

		text-transform: uppercase;

		color: #1976D2;
		background-color: #FFFFFF;
		opacity: ${p => p.isDisable ? 0.7 : 1};

		cursor: ${p => p.isDisable ? 'wait' : 'pointer'};

		:hover {
			filter: brightness(90%);
		}
	}

	input {
		margin: 0px 8px;

		display: flex;
		align-items: center;
		letter-spacing: 0.15px;

		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;

		background-color: ${p => p.isDisable ? '#F2F2F2' : '#FFFFFF'};

		pointer-events: ${p => p.isDisable ? 'wait' : 'all'};

		::placeholder {
			color: rgba(0, 0, 0, 0.6);
		}

		:focus {
			color: #1976D2;
			outline: none;
		}
	}

	a {
		text-decoration: none;

		* {
			:hover {
				color: #1877F2;
			}
		}
	}

	strong {
		font-weight: 700;
	}
`


export default GlobalStyle
