import React, { useState, useEffect } from 'react'
import { Box, Chip, TextField, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'

type MultiAutosuggestProps = {
	value: any[]
	options: any[]
	label: string
	name: string
	placeholder?: string
	handleChange: (event: any) => void
	handleInputChange: (event: any) => void
}

const MultiAutosuggest: React.FC<MultiAutosuggestProps> = (props) => {
	const {
		value,
		options,
		label,
		name,
		placeholder = 'Select',
		handleChange,
	} = props

	const [defaultValue, setDefaultValue] = useState<any>([])

	const handleOnChange = (event, newValue) => {
		handleChange({
			target: {
				name: name,
				value: newValue.map((v) => v.value),
			},
		})
	}

	const setInitialValues = () => {
		let initialValues = []
		initialValues = options.filter((o) => value.includes(o.value))
		setDefaultValue(initialValues)
	}

	useEffect(() => {
		if (value) setInitialValues()
	}, [value])

	return (
		<Box>
			<Typography variant="caption" color="textSecondary" sx={sx.label}>
				{label}
			</Typography>
			{defaultValue && (
				<Autocomplete
					multiple
					defaultValue={defaultValue}
					onChange={handleOnChange}
					options={options}
					getOptionLabel={(option) => option.label}
					renderTags={(tagValue, getTagProps) =>
						tagValue.map((option, index) => (
							<Chip label={option.label} {...getTagProps({ index })} />
						))
					}
					renderInput={(params) => {
						return (
							<TextField
								{...params}
								variant="outlined"
								placeholder={placeholder}
							/>
						)
					}}
				/>
			)}
		</Box>
	)
}

export default MultiAutosuggest

const sx = {
	root: {},
	inputRoot: {
		p: '5px 5px !important',
	},
	label: {
		mb: 0,
	},
}
