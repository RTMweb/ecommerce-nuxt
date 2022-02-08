import { ImageEdge, CurrencyCode, MoneyV2 } from './../schema.d';

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

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
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
    ...rest
  }

  return product
}