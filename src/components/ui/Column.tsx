import React from 'react'
import { Container } from '@mui/material'

type ColumnProps = {
	children: React.ReactNode
	bgcolor?: string
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Column: React.FC<ColumnProps> = (props) => {
	const { children, bgcolor = 'white', maxWidth } = props

	return (
		<Container
			sx={{
				...sx.root,
				bgcolor,
			}}
			maxWidth={maxWidth}
		>
			{children}
		</Container>
	)
}

export default Column

const sx = {
	root: {
		py: 4,
	},
}
