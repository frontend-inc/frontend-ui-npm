import React from 'react'
import { FormControl, Stack, Select, MenuItem, Typography } from '@mui/material'
import { SelectInputProps } from '../../../types'

const SelectInput: React.FC<SelectInputProps> = (props) => {
	const { label, direction = "column", name, value, options, handleChange } = props

	return (
		<FormControl size="small" fullWidth variant="outlined">
			<Stack
				sx={{
					...sx.stack,
					...(direction == "row" && sx.stackVertical),
				}}
				direction={direction}
				spacing={1}
			>
				<Typography variant="caption" sx={sx.label} gutterBottom>
					{label}
				</Typography>
				<Select
					sx={sx.root}
					value={value}
					name={name}
					onChange={(e) => handleChange(e)}
				>
					{options?.map((option, idx) => (
            // @ts-ignore
						<MenuItem 
              value={option.value} 
              key={idx}
            >
							{option.label}
						</MenuItem>
					))}
				</Select>
			</Stack>
		</FormControl>
	)
}

export default SelectInput

const sx = {
	root: {
		width: '100%',
		'.MuiSelect-select': {
			border: '1px solid',
			borderColor: 'divider',
			bgcolor: 'background.default',
		},
	},
	label: {
		mb: 0,
		minWidth: '100px',
		color: 'text.secondary',
	},
	stack: {
		width: '100%',
		alignItems: 'flex-start',
	},
	stackVertical: {
		alignItems: 'center',
	},
}
