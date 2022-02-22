import { ApiHooks } from '@common/types/api';
import { useApiProvider } from '@common'

export const useHook = (fn: (apiHooks: ApiHooks) => any) => {
  const { hooks } = useApiProvider()
  debugger
  return fn(hooks)
}