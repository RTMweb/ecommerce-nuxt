import { ReactNode, FC,ComponentType, HTMLAttributes } from 'react'
import s from "./Container.module.css"

interface Props {
  children:ReactNode | ReactNode[],
  el?: ComponentType<HTMLAttributes<HTMLElement>>
}

const Container: FC<Props> = ({children, el: Component = "div"}) => {
  return (
    <Component className="px-6 mx-auto max-w-8xl">
      {children}
    </Component>
  )

}

export default Container