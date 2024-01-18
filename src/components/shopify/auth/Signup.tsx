import React from 'react'
import { AuthLayout, AuthScreen } from '../../../components'
import { SignupForm } from '../../../components/shopify'
import { useAuth } from '@webstudio/shopify'
import { useRouter } from 'next/router'

type SignupProps = {
	logo: string
	title?: string
	subtitle?: string
	redirectUrl: string
	loginUrl: string
}

const Signup: React.FC<SignupProps> = (props) => {
	const {
		logo,
		title = 'Sign up',
		subtitle = 'Register your account',
		redirectUrl,
		loginUrl,
	} = props

	const { loading, errors, customer, handleChange, signup } = useAuth()

	const router = useRouter()

	const handleSubmit = async () => {
		let resp = await signup(customer)
		if (resp?.email) {
			router.push(redirectUrl)
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<AuthLayout>
			<AuthScreen logo={logo} title={title} subtitle={subtitle}>
				<SignupForm
					errors={errors}
					loading={loading}
					customer={customer}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleLogin={handleLogin}
				/>
			</AuthScreen>
		</AuthLayout>
	)
}

export default Signup
