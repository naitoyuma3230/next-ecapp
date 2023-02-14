import { NextApiRequest,NextApiResponse } from 'next'
import Head from 'next/head'
import { Data } from './api/products';

export async function getServerSideProps (context: NextApiResponse<Data[] | undefined >) {
  try {
    const host = context.req.headers.host || 'localhost:3000'
    const protocol = /^localhost/.test(host) ? 'http' : 'https' 
    const products = await fetch(`${protocol}://${host}/api/products`)
        .then(data => data.json())
        // .then((data)=> console.log(data))
    return {
        props: {
          products, //response body
        }
    }
} catch (e) {
    console.log(e)
    return {
        props: {
          products: [],
        }
    }
}
}

export default function HelloWorld(props:Data) {
  return (
    <div>
        <Head>
          <title>Hello World</title>
          <meta name="description" content="検索エンジン用の説明文" />
        </Head>
      <h1>Hello World</h1>
      <pre><code>{ JSON.stringify(props, null, 2) }</code></pre>
    </div>
  ) 
}