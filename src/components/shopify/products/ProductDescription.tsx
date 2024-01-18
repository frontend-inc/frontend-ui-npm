import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { TypographyVariants } from '../../../types'
import { useProductContext } from '@webstudio/shopify'

type ProductDescriptionProps = {
	label?: string
	variant?: TypographyVariants
	color?: string
}

const ProductDescription: React.FC<ProductDescriptionProps> = (props) => {
	const { color = 'text.secondary' } = props

	const { product } = useProductContext()

	return (
		<Typography variant="body2" color={color} sx={sx.description}>
			{product?.description}
		</Typography>
	)
}

export default ProductDescription

const sx = {
	description: {
		whiteSpace: 'pre-wrap',
	},
}
