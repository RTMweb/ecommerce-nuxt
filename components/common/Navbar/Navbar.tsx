import { FC } from "react"
import Link from "next/link"
import { Container } from "@components/ui"
import { Usernav } from "@components/common"
import s from "./Navbar.module.css"


const Navbar: FC = () => {
   
  return (
    <Container>
      <div className={s.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={s.logo}>
              NEXT_STORE
            </a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={s.link}>All</a>
            </Link>
            <Link href="/">
              <a className={s.link}>Clouthes</a>
            </Link>
            <Link href="/">
              <a className={s.link}>Accesories</a>
            </Link>
            <Link href="/">
              <a className={s.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar