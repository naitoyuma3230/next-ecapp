import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          Hello EC
        </Navbar.Brand>
        <Navbar.Brand href="/">
          TOP
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Component {...pageProps} />
    </>
    )
}
