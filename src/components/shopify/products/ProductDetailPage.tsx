import React, { useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import {
	ShopifyProduct,
	AddToCartButton,
	ProductInfo,
	ProductImages,
	ProductVariantSelector,
} from '../../../components/shopify'
import { useRecentlyViewed, useProductContext } from '@webstudio/shopify'
import { useResourceContext } from '../../../hooks'

type ProductDetailPageProps = {
	handle: string | string[]
	buttonText?: string
	enableQuantity?: boolean
	enableLikes?: boolean
	enableShares?: boolean
	enableFavorites?: boolean
  enableSubscription?: boolean
  enableOkendoStarRating?: boolean
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = (props) => {
	
  const {
		handle,
		buttonText,
		enableQuantity = true,
    enableSubscription=true,
		enableLikes,
		enableShares,
		enableFavorites,
    enableOkendoStarRating
	} = props

	const { product, variant } = useProductContext()

  const { viewProduct } = useRecentlyViewed()

  useEffect(() => {
    if(product){
      viewProduct(product)
    }
  }, [product?.handle])  

	return (
		<ShopifyProduct handle={handle}>
			<Stack spacing={0} direction="row" sx={sx.container}>
				<Box sx={sx.left}>
					<ProductImages product={product} />
				</Box>
				<Box sx={sx.right}>
					<Stack spacing={2}>
						<ProductInfo 
              enableOkendoStarRating={enableOkendoStarRating}
            />
						<ProductVariantSelector />
            <AddToCartButton
              product={product}
              variant={variant}
              enableQuantity={enableQuantity}
              enableSubscription={enableSubscription}
              enableFavorites={enableFavorites}
              label={buttonText}
            />              
					</Stack>
				</Box>
			</Stack>
		</ShopifyProduct>
	)
}

export default ProductDetailPage

const sx = {
	container: {
		display: 'flex',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
	},
	left: {
    p: {
      sm: 1,
      xs: 0
    },
		width: {
			xs: '100%',
			sm: '50%',
		},
	},
	right: {
    p: {
      sm: 1,
      xs: 0
    },
		width: {
			xs: '100%',
			sm: '50%',
		},
	},
	root: {
		px: 0,
	},
  actions: {
    alignItems: 'flex-end'
  }
}
