import React from 'react'
import { Container } from '@mui/material'

type ColumnProps = {
	children: React.ReactNode
	bgcolor?: string
  py?: number
  gap?: number 
  cols?: number
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Column: React.FC<ColumnProps> = (props) => {
	const { children, cols=1, gap=0, py=4, bgcolor, maxWidth } = props

	return (
		<Container
			sx={{
				...sx.root,        
        gridTemplateColumns: { 
          sm: `repeat(${Number(cols)}, 1fr)`, 
          xs: '1fr'
        },
        gap,
        py,
        px: py > 0 ? 2 : 0,
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
