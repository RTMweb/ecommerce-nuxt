import { ImageEdge, CurrencyCode, MoneyV2, ProductOption, ProductVariantConnection, SelectedOption } from './../schema.d';

import { Product as ShopifyProduct } from "../schema"
import { Product } from "@common/types/product"

const normalizeProductImages = ({edges}: {edges: Array<ImageEdge>}) => {
  return edges.map(({ node: {originalSrc: url, ...rest}})=>{
    return {
      url:`/images/${url}`,
      ...rest
    }
  })
}

const normalizeProducePrice = ({currencyCode, amount}: MoneyV2) => {
  return {
    value: +amount,
    currencyCode: currencyCode
  }
}

const normalizeProductOption = ({
  id,
  values,
  name: displayName
}: ProductOption)=>{
  const normalized = {
    id,
    displayName,
    values: values.map(value => {
      let output: any = {
        label: value
      }

      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value
        }
      }

      return output
    })
  }

  return normalized
}

const normalizeProductVariets = ({edges}:ProductVariantConnection) => {

  return edges.map(({node}) => {
    const {id,selectedOptions,sku,title,priceV2,compareAtPriceV2} = node
    return {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({name,value}: SelectedOption) => {
        const option = normalizeProductOption({
          id,
          name,
          values: [value]
        })
        return option
      })
    }
  })
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
    variants,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    price: normalizeProducePrice(priceRange.minVariantPrice),
    options: options ? 
    options.filter(o => o.name !== "Title").map(o => normalizeProductOption(o)) : 
    [],
    variants: variants ? normalizeProductVariets(variants) : [],
    ...rest
  }

  return product
}