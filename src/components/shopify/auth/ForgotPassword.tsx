import React from 'react'
import { AuthScreen, LayoutLoader } from '../../../components'
import { ForgotPasswordForm } from '../../../components/shopify'
import { useAuth } from 'webstudio-shopify'
import { useAlerts } from '../../../hooks'
import { useRouter } from 'next/router'

type ForgotPasswordProps = {
	title?: string
	subtitle?: string
	loginUrl?: string
}

const ForgotPassword: React.FC<ForgotPasswordProps> = (props) => {
	const { title, subtitle, loginUrl } = props || {}

	const { showAlertSuccess } = useAlerts()

	const {
		loading,
		errors,
		customer,
		setCustomer,
		handleChange,
		forgotPassword,
	} = useAuth()

	const router = useRouter()

	const handleSubmit = async () => {
		let resp = await forgotPassword(customer?.email)
		if (resp?.id) {
			setCustomer({ emal: '' })
			showAlertSuccess('Password reset instructions sent')
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen title={title} subtitle={subtitle}>
				<ForgotPasswordForm
					errors={errors}
					customer={customer}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleLogin={handleLogin}
				/>
			</AuthScreen>
		</LayoutLoader>
	)
}

export default ForgotPassword
