import React, { useEffect, useContext } from 'react'
import { ProductContext } from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'
import { Product } from 'frontend-shopify'

type ShopifyProductPageProps = {
	handle?: string | string[]
	product?: Product
	children: any
}

const ShopifyProduct: React.FC<ShopifyProductPageProps> = (props) => {
	const { handle, product: initialProduct, children } = props

	const { product, fetchProduct } = useProducts()

	const { setProduct } = useContext(ProductContext) as any

	useEffect(() => {
		if (handle) {
			fetchProduct(handle)
		}
	}, [handle])

	useEffect(() => {
		if (initialProduct) {
			setProduct(initialProduct)
		}
	}, [initialProduct])

	useEffect(() => {
		if (product) {
			setProduct(product)
		}
	}, [product])

	return children
}

export default ShopifyProduct
