// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Stripe } from 'stripe'

export type Data = {
  name: string,
  price:number
}

export type StripeResData = {
  
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] |  undefined | Stripe.Product>
) {
  if (req.method!.toLocaleLowerCase() !== 'get') {
    // end():No Response
    return res.status(405).end()
  }
  const stripe = new Stripe(import.meta.env.VITE_STRIPE_API_KEY, {
    apiVersion: '2022-11-15', 
    maxNetworkRetries: 3 // ネットワークエラーでStripe API呼び出しが失敗した時のリトライ回数を指定
  })
  const products: any = await stripe.products.list()
  if (!products.data || products.data.length < 1) {
    return res.status(200).json([])
  }
  res.status(200).json(products)
  res.status(200).json([
    {
      name: "testItem",
      price: 5000,
    },
    {
      name: "secondItem",
      price: 6000
    }
  ])
}
