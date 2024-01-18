import React from 'react'
import { Box, CardActionArea, Grid, Typography } from '@mui/material'
import { Label } from 'components/ui'

type SquareButtonProps = {
	icon: React.ReactNode
	label: string
	title?: string
	selected?: boolean
	handleClick?: () => void
}

const SquareButton: React.FC<SquareButtonProps> = (props) => {
	const { icon, label, title, handleClick, selected = false } = props

	return (
		<CardActionArea
			sx={sx.cardActionArea}
			onClick={handleClick ? handleClick : null}
		>
			<Box
				sx={{
					...sx.item,
					...(selected && sx.selected),
				}}
			>
				{icon && <Box sx={sx.icon}>{icon}</Box>}
				{title && (
					<Typography variant="body2" color="text.primary">
						{title}
					</Typography>
				)}
				{label && <Label label={label} />}
			</Box>
		</CardActionArea>
	)
}

export default SquareButton

const sx = {
	cardActionArea: {
		p: 0,
		minWidth: '100px',
	},
	selected: {
		border: '2px solid',
		borderColor: 'primary.main',
	},
	item: {
		py: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderRadius: (theme) => theme.shape.borderRadius,
		boxShadow: 0,
		width: '100%',
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.paper',
		'&:hover': {
			borderColor: 'primary.main',
		},
	},
	icon: {
		mt: 1,
	},
}
