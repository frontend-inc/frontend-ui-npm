import React from 'react'
import { useProductContext } from '@webstudio/shopify'
import { Stack, Typography } from '@mui/material'
import { formatCurrency } from '@webstudio/shopify'
import { ProductDescription } from 'components/shopify'
import { OkendoStarRating } from 'components/addons'

type ProductDetailsProps = {
	disableCompareAtPrice?: boolean
  enableOkendoStarRating?: boolean
}

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
	const { 
    disableCompareAtPrice = false,
    enableOkendoStarRating = false 
  } = props

	const { price, compareAtPrice, product } = useProductContext()

	if (!product) return null
	return (
		<Stack spacing={1}>
			<Typography color="text.primary" variant="h3">
				{product.title}
			</Typography>
      { enableOkendoStarRating && (
        <OkendoStarRating product={product} />
      )}
			<Typography color="text.primary" variant="body2" sx={sx.price}>
				{price && formatCurrency(price)}
				{!disableCompareAtPrice && compareAtPrice && (
					<span>{formatCurrency(compareAtPrice)}</span>
				)}
			</Typography>
			<ProductDescription />
		</Stack>
	)
}

export default ProductDetails

const sx = {
	price: {
		'& span': {
			textDecoration: 'line-through',
			color: 'text.secondary',
			ml: 1,
		},
	},
}
