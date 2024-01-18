import React from 'react'
import {
	NewPasswordForm,
	AuthScreen,
	LayoutLoader,
} from '../../../components'
import { useAuth } from '../../../hooks'
import { useRouter } from 'next/router'

type NewPasswordProps = {
	logo: string
	redirectUrl: string
	title?: string
	subtitle?: string
	loginUrl?: string
}

const NewPassword: React.FC<NewPasswordProps> = (props) => {
	const {
		logo,
		redirectUrl,
		title = 'New Password',
		subtitle = 'Create a new password',
		loginUrl,
	} = props || {}

	const router = useRouter()

	const { errors, loading, user, handleChange, updateMe } = useAuth()

	const handleSubmit = async () => {
		let resp = await updateMe(user)
		if (resp?.id) {
			router.push(redirectUrl)
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen logo={logo} title={title} subtitle={subtitle}>
				<NewPasswordForm
					loading={loading}
					errors={errors}
					user={user}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleLogin={handleLogin}
				/>
			</AuthScreen>
		</LayoutLoader>
	)
}

export default NewPassword
