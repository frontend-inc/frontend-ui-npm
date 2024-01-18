import React, { useState, useEffect } from 'react'
import { CheckboxFilterList } from 'components/shopify'
import { ProductCollectionFilter } from '@webstudio/shopify'
import { findStyleFilters } from '@webstudio/shopify'

type StyleFiltersProps = {
	filters: ProductCollectionFilter[]
	options: string[]
	handleClick: (value: string) => void
}

const StyleFilters: React.FC<StyleFiltersProps> = (props) => {
	const { filters, options, handleClick } = props

	const [values, setValues] = useState([])

	useEffect(() => {
		if (filters) {
			setValues(findStyleFilters(filters))
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

export default StyleFilters
