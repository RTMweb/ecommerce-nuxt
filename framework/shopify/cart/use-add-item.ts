
import { MutationHook } from '@common/types/hooks';
import { useAddItem } from '@common/cart';
import { getCheckoutId } from '@framework/utils';
import { checkoutLineItemsAddMutation } from '@framework/utils/mutations';

export default useAddItem


export const handler: MutationHook = {
  fetcherOptions: {
     query:checkoutLineItemsAddMutation
  },
  fetcher: async ({fetch, options, input}) => {

    const variables = {
        checkoutId: getCheckoutId(),
        lineItems: [
          {
            varientId: input.variantId,
            quantity: 1
          }
        ]
      }

    const response = await fetch({
      ...options,
      variables
    })
    return response
  },
  useHook: ({fetch}) => {
    return async (input: any) => {
      const responce = await fetch(input)
      return {
        output: responce
      }
    }
  }
}