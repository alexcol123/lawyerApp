import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  const origin = requestHeaders.get('origin');

  const { perfilId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      metadata: {
        perfilId: perfilId,
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Deposito $99 USD aplicacion para la I-131f',
              description: 'Deposito $99 USD aplicacion para la I-131f. Nuestra agencia empezará el proceso de la aplicación una vez que el depósito sea recibido. El depósito no es reembolsable ni transferible.',
            },
            unit_amount: 99 * 100,
          },
        },
      ],
      mode: 'payment',
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
    });

    return Response.json({ clientSecret: session.client_secret })
  } catch (error) {
    console.log(error)

    return Response.json(null, {
      status: 500,
      statusText: 'Internal Server Error',
    })
  }
};