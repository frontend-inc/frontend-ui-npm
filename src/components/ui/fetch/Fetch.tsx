import React, { useEffect } from 'react'
import { Box, Backdrop } from '@mui/material'
import { useResourceContext } from 'hooks'
import { LayoutLoader } from 'components'

type FetchProps = {
	url: string
	handle: string | string[]
	children: any
}

const Fetch: React.FC<FetchProps> = (props) => {
	const { children, url, handle } = props

	const { loading, findOne } = useResourceContext({
		url,
	})

	useEffect(() => {
		if (url && handle) {
			findOne(handle)
		}
	}, [url, handle])

	return <>{children}</>
}

export default Fetch
