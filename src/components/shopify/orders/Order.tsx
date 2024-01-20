import React, { useContext, useEffect } from 'react'
import { AuthScreen, LayoutLoader } from '../../../components'
import { useOrders } from 'webstudio-shopify'
import { OrderDetails } from '../../../components/shopify'
import { useRouter } from 'next/router'
import moment from 'moment'

type ShopifyCustomerOrderProps = {
	logo: string
	title?: string
	subtitle?: string
}

const ShopifyCustomerOrder: React.FC<ShopifyCustomerOrderProps> = (props) => {
	const router = useRouter()
	let { order_id: orderId } = router?.query
	if (orderId == 'new') {
		orderId = null
	}

	const { logo } = props || {}

	const { loading, order, fetchCustomerOrder } = useOrders()

	useEffect(() => {
		if (orderId) {
			fetchCustomerOrder(orderId)
		}
	}, [orderId])

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen
				logo={logo}
				title={`Order ${order.name}`}
				subtitle={moment(order?.processedAt).format('MMMM Do, YYYY')}
			>
				<OrderDetails order={order} />
			</AuthScreen>
		</LayoutLoader>
	)
}

export default ShopifyCustomerOrder
