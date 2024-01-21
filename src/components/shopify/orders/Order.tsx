import React, { useContext, useEffect } from 'react'
import { AuthScreen, LayoutLoader } from '../../../components'
import { useOrders } from 'webstudio-shopify'
import { OrderDetails } from '../../../components/shopify'
import { useParams } from 'next/navigation'
import moment from 'moment'

type ShopifyCustomerOrderProps = {
	title?: string
	subtitle?: string
}

const ShopifyCustomerOrder: React.FC<ShopifyCustomerOrderProps> = (props) => {
	let { order_id: orderId } = useParams()
	if (orderId == 'new') {
		orderId = null
	}

	const { loading, order, fetchCustomerOrder } = useOrders()

	useEffect(() => {
		if (orderId) {
			fetchCustomerOrder(orderId)
		}
	}, [orderId])

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen
				title={`Order ${order.name}`}
				subtitle={moment(order?.processedAt).format('MMMM Do, YYYY')}
			>
				<OrderDetails order={order} />
			</AuthScreen>
		</LayoutLoader>
	)
}

export default ShopifyCustomerOrder
