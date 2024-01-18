import React from 'react'
import { Hidden } from '@mui/material'
import {
	ProductImageThumbnails,
	SwipeableProductImages,
} from 'components/shopify'
import { PDP_IMAGE_HEIGHT } from 'constants/index'
import { Product } from '@webstudio/shopify'

type ProductImagesProps = {
	product: Product
}

const ProductImages: React.FC<ProductImagesProps> = (props) => {
	const { product } = props

	return (
		<>
			<Hidden smDown>
				<ProductImageThumbnails />
			</Hidden>
			<Hidden smUp>
				<SwipeableProductImages 
          objectFit='contain'
          height={PDP_IMAGE_HEIGHT} 
          width={PDP_IMAGE_HEIGHT}
          product={product} 
        />
			</Hidden>
		</>
	)
}

export default ProductImages
