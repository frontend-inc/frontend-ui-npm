import React, { useState } from 'react'
import { Box, Button, Popover } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

type FilterButtonProps = {
	label: string
	count?: number
	children: any
	anchorVertical?: any
	anchorHorizontal?: any
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
	const {
		label,
		count = 0,
		children,
		anchorVertical = 'bottom',
		anchorHorizontal = 'left',
	} = props || {}

	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleButtonClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Box>
			<Button
				variant="text"
				color="secondary"
				onClick={handleButtonClick}
				endIcon={open ? <ExpandLess /> : <ExpandMore />}
			>
				{label} {count > 0 && `(${count})`}
			</Button>
			<Popover
				id="filter-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: anchorVertical,
					horizontal: anchorHorizontal,
				}}
				//@ts-ignore
				slots={{ paper: { sx: sx.paper } }}
				sx={sx.popover}
			>
				{children}
			</Popover>
		</Box>
	)
}

export default FilterButton

const sx = {
	paper: {},
	popover: {
		'& .MuiPopover-paper': {
			minWidth: '180px',
		},
	},
}
