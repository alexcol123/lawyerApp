'use client'

import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
)

const CheckOutPage = () => {

  const searchParams = useSearchParams()
  const perfilId = searchParams.get('perfilId')



  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const response = await axios.post('/api/payment', {
      perfilId: perfilId,
    })
    return response.data.clientSecret
  }, [perfilId])

  const options = { fetchClientSecret }


  return (
    <div id='checkout'>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
export default CheckOutPage