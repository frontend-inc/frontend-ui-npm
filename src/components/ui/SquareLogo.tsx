import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import Image from 'next/image'
import { AppContext } from 'context'

type SquareLogoProps = {
	src: string
	size?: number
}

const SquareLogo: React.FC<SquareLogoProps> = (props) => {
	const { src, size = 64 } = props
	const { clientUrl } = useContext(AppContext)

	const router = useRouter()
	const handleClick = () => {
		router.push(clientUrl)
	}

	return (
		<Button onClick={handleClick}>
			<Image
				src={src}
				alt="Logo"
				width={size}
				height={size}
				style={{
					objectFit: 'contain',
				}}
			/>
		</Button>
	)
}

export default SquareLogo
