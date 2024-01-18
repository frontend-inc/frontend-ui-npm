import React from 'react'
import { ListItem, ListItemText, Typography } from '@mui/material'

type LineItemProps = {
	label: string
	value: string | number | null | undefined
}

const LineItem: React.FC<LineItemProps> = (props) => {
	const { label, value } = props

	return (
		<ListItem>
			<ListItemText
				primary={<Typography variant="body2">{label}</Typography>}
				secondary={
					<Typography variant="body1" mt={1}>
						{value ? value : '-'}
					</Typography>
				}
			/>
		</ListItem>
	)
}

export default LineItem
