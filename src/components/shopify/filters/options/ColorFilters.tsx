import React, { useState, useEffect } from 'react'
import { CheckboxFilterList } from 'components/shopify'
import { ProductCollectionFilter } from '@webstudio/shopify'
import { findColorFilters } from '@webstudio/shopify'

type ColorFiltersProps = {
	filters: ProductCollectionFilter[]
	options: string[]
	handleClick: (value: string | number) => void
}

const ColorFilters: React.FC<ColorFiltersProps> = (props) => {
	const { filters, options, handleClick } = props

	const [values, setValues] = useState([])

	useEffect(() => {
		if (filters) {
			setValues(findColorFilters(filters))
		}
	}, [filters])

	return (
		<CheckboxFilterList
			options={options}
			values={values}
			handleClick={handleClick}
		/>
	)
}

export default ColorFilters
