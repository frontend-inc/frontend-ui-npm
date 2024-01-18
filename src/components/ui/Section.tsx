import React from 'react'
import { Box } from '@mui/material'

type SectionProps = {
	children: React.ReactNode
	bgColor?: string
	p?: number
	styles?: any
}

const Section: React.FC<SectionProps> = (props) => {
	const { children, bgColor = 'white', p = 4, styles = {} } = props

	return (
		<Box
			sx={{
				bgcolor: bgColor,
				p: p,
				...styles,
			}}
		>
			{children}
		</Box>
	)
}

export default Section
