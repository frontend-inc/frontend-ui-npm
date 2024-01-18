import React, { useState, useEffect } from 'react'
import { CheckboxFilterList } from 'components/shopify'
import { ProductCollectionFilter } from '@webstudio/shopify'
import { findVendorFilters } from '@webstudio/shopify'

type VendorFiltersProps = {
	filters: ProductCollectionFilter[]
	options: string[]
	handleClick: (value: string) => void
}

const VendorFilters: React.FC<VendorFiltersProps> = (props) => {
	const { filters, options, handleClick } = props

	const [values, setValues] = useState([])

	useEffect(() => {
		if (filters) {
			setValues(findVendorFilters(filters))
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

export default VendorFilters
