import React, { useEffect } from 'react'
import { useRecentlyViewed } from 'webstudio-shopify'
import { Product } from 'webstudio-shopify'

type TrackRecentlyViewedProps = {
	product?: Product
}

const TrackRecentlyViewed: React.FC<TrackRecentlyViewedProps> = (props) => {
	
  const {
		product
	} = props

  const { viewProduct } = useRecentlyViewed()
  
  useEffect(() => {
    if(product?.handle){
      viewProduct(product)
    }
  }, [product?.handle])  

	return null
}

export default TrackRecentlyViewed

