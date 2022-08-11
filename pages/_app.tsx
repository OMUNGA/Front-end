import '../styles/globals.css'
import {ThemeProvider} from "styled-components"
import Theme from "../Theme/Theme"
import type { AppProps } from 'next/app'
import { AppProvider} from "../context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={Theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
