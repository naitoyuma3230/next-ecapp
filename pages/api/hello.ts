// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  price:number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | undefined >
) {
  if (req.method!.toLocaleLowerCase() !== 'GET') {
    return res.status(405).end()
  }
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
