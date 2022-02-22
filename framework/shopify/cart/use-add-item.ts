import { useAddItem } from '@common/cart';

export default useAddItem


export const handler = {
  fetcher: () => {
    console.log("Fetch Data!")
  },
  useHook: () => {
    debugger
    return (input: any) => {
      debugger
    return {
      output: JSON.stringify(input)+ "_MODIFIED"
    }
  }
  }
}