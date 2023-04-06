// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import '@/styles/globals.css'
import '../styles/scss/style.scss'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
