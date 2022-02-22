
import { useHook } from '@common/utils/use-hooks' 


 const useAddItem = () => {
   debugger
   const hook = useHook((hooks) => {
    debugger 
    hooks.cart.useAddItem
  })
   debugger
  return hook.useHook()
}

export default useAddItem