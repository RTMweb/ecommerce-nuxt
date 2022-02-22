
import { AppProps } from "next/app"
import { FC } from "react"
import "@assets/main.css"
import 'keen-slider/keen-slider.min.css'
import { UIProvider, useUI } from '@components/ui/context'

const Noop: FC = ({children}) => <>{children}</>

function App({Component, pageProps}:AppProps & {Component: {Layout:FC}}) {

  const Layout = Component.Layout ?? Noop
 
  return (
    <UIProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default App