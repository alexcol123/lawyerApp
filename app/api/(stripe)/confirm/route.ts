import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
import { redirect } from 'next/navigation'
import db from '@/utils/db'
import { type NextRequest } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'


// import { sendEmailAction } from '@/utils/actions'


export const GET = async (req: NextRequest) => {

  const user = await currentUser()

  if (!user) {
    redirect('/')
  }


  const { searchParams } = new URL(req.url)
  const session_id = searchParams.get('session_id') as string

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id)
    console.log(session.status)


    if (session.status === 'complete') {

      await db.perfil.update({
        where: {
          clerkId: user.id,
        },
        data: {
          applicationDepositPaid99Dollars: true,
        },
      })

      console.log('perfil updated , payment deposit paid 99 dollars')

    }


    console.log('Not Paid ')


  } catch (err) {
    // console.log(err)
    return Response.json(null, {
      status: 500,
      statusText: 'Internal Server Error',
    })
  }
  // add 
  redirect('/gracias')
}
