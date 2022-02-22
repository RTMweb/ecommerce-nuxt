import React, { FC,Children,isValidElement } from "react"
import s from "./ProductSlider.module.css"
import { useKeenSlider } from 'keen-slider/react'
import cn from "classnames"

const ProductSlider: FC = ({children}) => {
  const [refCallback, slider ] = useKeenSlider(
    {
      initial: 0,
      loop:true,
      slideChanged() {
        console.log('slide changed')
      },
    },
  )

  const prev = () =>{
    slider.current?.prev()
  }
  const next = () =>{
    slider.current?.next()
  }

  return (
    <div className={s.root}>
      <div ref={refCallback} className="keen-slider h-full transition-opacity">
        <button 
        onClick={prev}
        className={cn(s.leftControl,s.control)}
        />
        <button 
        onClick={next}
        className={cn(s.rightControl,s.control)}
        />

        {Children.map(children, (child)=> {
         
         if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                }  keen-slider__slide`
              }
        }
      }
      return child
    })}
      </div>
    </div>
  )
}

export default ProductSlider