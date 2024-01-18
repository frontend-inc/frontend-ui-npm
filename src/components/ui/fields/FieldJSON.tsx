import React from 'react'
import { FieldWrapper, FieldString } from 'components/ui'

type FieldJSONProps = {
	value?: any
	label?: string
	rest?: any
}

const FieldJSON: React.FC<FieldJSONProps> = (props) => {
	const { value, label, ...rest } = props
	return (
		<FieldWrapper label={label} {...rest}>
			<FieldString value={JSON.stringify(value, null, 2)} />
		</FieldWrapper>
	)
}

export default FieldJSON
