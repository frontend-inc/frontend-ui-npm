import React, { useEffect } from 'react'
import {
	ResetPasswordForm,
	AuthScreen,
	LayoutLoader,
} from 'components/ui'
import { useAuth } from 'hooks'
import { useRouter } from 'next/router'

type ResetPasswordProps = {
	logo: string
	title?: string
	subtitle?: string
	loginUrl?: string
	redirectUrl?: string
}

const ResetPassword: React.FC<ResetPasswordProps> = (props) => {
	const router = useRouter()
	const { token: resetPasswordToken } = router.query

	const {
		logo,
		title = 'Reset Password',
		subtitle = 'Enter your new password',
		redirectUrl = '/login',
		loginUrl,
	} = props || {}

	const { loading, errors, user, handleChange, resetPassword } = useAuth()

	const handleSubmit = async () => {
		let resp = await resetPassword(
			user?.email,
			user?.password,
			user?.password_confirmation,
			String(resetPasswordToken)
		)
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
				<ResetPasswordForm
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

export default ResetPassword
