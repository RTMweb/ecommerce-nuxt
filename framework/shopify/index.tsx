import { ReactNode } from 'react'

import { 
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider 
} from '@common'
  
import { shopifyHooks } from './hooks'

import { getConfig } from "./api/config"
const config = getConfig()

interface ShopifyApiProvider {
  children: ReactNode | ReactNode[]
}

export const ApiProvider = ({children}: ShopifyApiProvider) => {

  return (
    <CoreApiProvider 
    config={{...config}}
    hooks={shopifyHooks}
    >
      {children}
    </CoreApiProvider>
  )
}

export const useApiProvider = () => useCoreApiProvider()