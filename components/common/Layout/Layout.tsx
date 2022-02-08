import { FC } from "react"
import s from "./Layout.module.css"
import {Footer, Navbar} from "@components/common"
import { Sidebar } from "@components/ui"
import { CartSidebar } from '@components/cart'

const Layout: FC = ({children}) => {
  return (
    <div className={s.root}>
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <Navbar/>
      <main className="fit">  
        { children }
      </main>
      <Footer/>
    </div>
  )
}

export default Layout