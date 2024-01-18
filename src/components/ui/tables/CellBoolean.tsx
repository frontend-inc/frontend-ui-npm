import React from 'react'
import { Label } from 'components/ui'

type CellBooleanProps = {
	value: boolean
}

const CellBoolean: React.FC<CellBooleanProps> = (props) => {
	const { value } = props
	return <Label label={value ? 'True' : 'False'} />
}

export default CellBoolean
