import React from 'react'
import ProductVariantOptions from './ProductVariantOptions'
import ColorVariantOptions from './ColorVariantOptions'
import { useProductContext } from '@webstudio/shopify'

const ProductVariantSelector: React.FC = () => {
	const { product, selectedOptions, handleOptionChange } = useProductContext()

	const productOption = (optionName) => {
		return product?.options?.find((option) => option?.name == optionName)
	}

	const SORTED_OPTIONS = ['Color', 'Size', 'Style', 'Material']

	return (
		<>
			{SORTED_OPTIONS.map((optionName) => {
				let option = productOption(optionName)
				if (!option) return null
				return optionName == 'Color' ? (
					<ColorVariantOptions
						name={'Color'}
						values={option?.values}
						selected={selectedOptions['Color']}
						handleChange={handleOptionChange}
					/>
				) : (
					<ProductVariantOptions
						name={option?.name}
						values={option?.values}
						selected={selectedOptions[option?.name]}
						handleChange={handleOptionChange}
					/>
				)
			})}
		</>
	)
}

export default ProductVariantSelector
