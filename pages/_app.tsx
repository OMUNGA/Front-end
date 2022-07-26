import '../styles/globals.css'
import {ThemeProvider} from "styled-components"
import Theme from "../Theme/Theme"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
