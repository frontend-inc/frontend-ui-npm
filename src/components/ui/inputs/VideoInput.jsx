import React from 'react'
import { CellVideo } from 'components/ui'
import { Box, Button } from '@mui/material'
import { TextInput } from 'components/ui'
import { Search } from 'lucide-react'

const VideoInput = ({
	name,
	label,
	value,
	handleChange,
	handleBrowse,
	placeholder,
	errors,
	...props
}) => {
	return (
		<Box sx={sx.root}>
			<CellVideo value={value} />
			<TextInput
				name={name}
				value={value}
				handleChange={handleChange}
				placeholder={placeholder}
				errors={errors}
			/>
			<Button
				sx={sx.button}
				size="small"
				variant="outlined"
				onClick={() => handleBrowse(name)}
				startIcon={<Search sx={sx.icon} />}
			>
				Browse
			</Button>
		</Box>
	)
}

export default VideoInput

const sx = {
	button: {
		color: 'text.secondary',
		mt: 0.5,
	},
}
