import { MutationHook } from '@common/types/hooks';
import { useAddItem } from '@common/cart';

export default useAddItem


export const handler: MutationHook = {
  fetcher: (input: any) => {
    return JSON.stringify(input)+ "_MODIFIED"
  },
  useHook: ({fetch}:any) => {
    return (input: any) => {
      const responce = fetch(input)
      return {
        output: responce
      }
    }
  }
}