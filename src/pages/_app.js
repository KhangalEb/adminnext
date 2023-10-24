
import Layout from '@/layout/layouts'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  console.log(pageProps)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}
