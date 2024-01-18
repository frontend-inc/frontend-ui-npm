import React, { useEffect } from 'react'
import { useAuth } from 'hooks'
import {
	AuthScreen,
	LayoutLoader,
	MyAccountForm,
} from 'components/ui'
import { useRouter } from 'next/router'

type MyAccountProps = {
	logo: string
	redirectUrl: string
}

const MyAccount: React.FC<MyAccountProps> = (props) => {
	const router = useRouter()
	const { redirectUrl, logo } = props || {}

	const {
		loading,
		user,
		setUser,
		currentUser,
		updateMe,
		handleChange,
		fetchMe,
		deleteAvatar,
	} = useAuth()

	const handleDeleteAvatar = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		await updateMe(user)
	}

	const handleRedirect = () => {
		router.push(redirectUrl)
	}

	useEffect(() => {
		if (!currentUser) {
			fetchMe()
		} else {
			setUser(currentUser)
		}
	}, [currentUser])

	return (
		<LayoutLoader loading={loading}>
			{currentUser && (
				<AuthScreen
					logo={logo}
					title={`${currentUser?.first_name} ${currentUser?.last_name}`}
					subtitle={'Update account'}
				>
					<MyAccountForm
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						handleDeleteAvatar={handleDeleteAvatar}
						handleRedirect={handleRedirect}
					/>
				</AuthScreen>
			)}
		</LayoutLoader>
	)
}

export default MyAccount

const sx = {
	container: {
		m: 2,
	},
	panel: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}
