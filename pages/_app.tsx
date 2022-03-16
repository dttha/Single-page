import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'antd/dist/antd.css';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
