
import { sanitizeDisciplineTests } from '../../../helpers/testsDataHelper'

import DisciplinesTests from './disciplinesTests'

import { Container } from './styles'


const mockTermsData = [
	{
		number: 1,
		disciplines: [
			{
				name: 'Programação',
				categories: [
					{
						name: 'P1',
						tests: [
							{
								name: 'globo.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Ciclano'
							},
						],
					},
					{
						name: 'P2',
						tests: [
							{
								name: 'globo.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Ciclano'
							},
						],
					},
				],
			},
			{
				name: 'Álgebra',
				categories: [
					{
						name: 'P1',
						tests: [
							{
								name: 'globo.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Ciclano'
							},
						],
					},
					{
						name: 'P2',
						tests: [
							{
								name: 'globo.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Ciclano'
							},
						],
					},
				],
			},
		],
	},
	{
		number: 2,
		disciplines: [
			{
				name: 'Programação',
				categories: [
					{
						name: 'P1',
						tests: [
							{
								name: 'globo.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Ciclano'
							},
						],
					},
					{
						name: 'P2',
						tests: [
							{
								name: 'globo.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Ciclano'
							},
						],
					},
				],
			},
			{
				name: 'Álgebra',
				categories: [
					{
						name: 'P1',
						tests: [
							{
								name: 'globo.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Ciclano'
							},
						],
					},
					{
						name: 'P2',
						tests: [
							{
								name: 'globo.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Fulano'
							},
							{
								name: 'instagram.com',
								teacherName: 'Ciclano'
							},
						],
					},
				],
			},
		],
	},
]

const mockDisciplinesData = [
	{
		name: 'Programação',
		terms: [
			{
				number: 1,
				tests: [
					{
						name: 'CSS',
						categories: [
							{
								name: 'P1',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							},
							{
								name: 'P2',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							}
						]
					},
					{
						name: 'HTML',
						categories: [
							{
								name: 'P1',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							},
							{
								name: 'P2',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							}
						]
					}
				]
			},
			{
				number: 2,
				tests: [
					{
						name: 'CSS',
						categories: [
							{
								name: 'P1',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							},
							{
								name: 'P2',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							}
						]
					},
					{
						name: 'HTML',
						categories: [
							{
								name: 'P1',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							},
							{
								name: 'P2',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							}
						]
					}
				]
			}
		]
	},
	{
		name: 'Álgebra',
		terms: [
			{
				number: 1,
				tests: [
					{
						name: 'CSS',
						categories: [
							{
								name: 'P1',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							},
							{
								name: 'P2',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							}
						]
					},
					{
						name: 'HTML',
						categories: [
							{
								name: 'P1',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							},
							{
								name: 'P2',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							}
						]
					}
				]
			},
			{
				number: 2,
				tests: [
					{
						name: 'CSS',
						categories: [
							{
								name: 'P1',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							},
							{
								name: 'P2',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							}
						]
					},
					{
						name: 'HTML',
						categories: [
							{
								name: 'P1',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							},
							{
								name: 'P2',
								tests: [
									{
										name: 'globo.com',
										teacherName: 'Fulano'
									},
									{
										name: 'globo.com',
										teacherName: 'Ciclano'
									},
									{
										name: 'instagram.com',
										teacherName: 'Fulano'
									},
								]
							}
						]
					}
				]
			}
		]
	},
]
const PageContent = ({ type, testData }) => {
	if (testData.length === 0) return <>Sem provas ainda ☹</>
	
	return (
		<Container>
			{
				Boolean(type === 'disciplines')
					? <DisciplinesTests testData={sanitizeDisciplineTests(testData)} />
					: <></>
			}
		</Container>
	)
}


export default PageContent

