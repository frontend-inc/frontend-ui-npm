import React, { useEffect } from 'react'
import { AuthScreen, LayoutLoader } from '../../../components'
import { useAuth, useCustomers } from 'webstudio-shopify'
import { CustomerForm } from '../../../components/shopify'

type CustomerProps = {
	logo: string
	title?: string
	subtitle?: string
}

const Customer: React.FC<CustomerProps> = (props) => {
	const {
		logo,
		title = 'Customer details',
		subtitle = 'Update your account',
	} = props || {}

	const {
		errors,
		loading,    
		customer,    
		fetchCustomer,
		updateCustomer,
	} = useCustomers()

  const { 
    customer: authCustomer,
    setCustomer: setAuthCustomer,
    handleChange,
    accessToken 
  } = useAuth()

  useEffect(() => {
    if(customer){
      setAuthCustomer(customer)
    }
  }, [customer])

	const handleSubmit = async () => {
		await updateCustomer(accessToken, {
			email: customer?.email,
			firstName: customer?.firstName,
			lastName: customer?.lastName,
			phone: customer?.phone,
			acceptsMarketing: customer?.acceptsMarketing,
		})
	}

	useEffect(() => {
		if (!customer?.email) {
			fetchCustomer(accessToken)
		}
	}, [customer])

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen logo={logo} title={title} subtitle={subtitle}>
				<CustomerForm
					loading={loading}
					customer={authCustomer}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</AuthScreen>
		</LayoutLoader>
	)
}

export default Customer
