
import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from "@framework/product"
import { getConfig } from '@framework/api/config'
import { Layout } from "@components/common"
import { ProductCard } from '@components/product'
import { Grid, Hero, Marquee } from '@components/ui'


export async function getStaticProps() {
	const config = getConfig()
	const products = await getAllProducts(config)

	return {
		props: {
			products
		},
		revalidate: 4 * 60 * 60
	}
}

export default function Home({
	products
}:InferGetStaticPropsType<typeof getStaticProps> ) {

	return (
		<>
			<Grid>
				{ products.slice(0,3).map(product => 
					<ProductCard key={product.id} product={product}/>
					) }
			</Grid>
			<Hero 
			headline="Cookies, Ice cream and Muffin"
			description='Shortbread chupa chups liquorice fruitcake jelly sugar plum jelly beans candy fruitcake. Powder toffee jelly-o fruitcake brownie toffee oat cake. Dragée ice cream jujubes fruitcake sweet roll candy canes brownie apple pie. Icing dragée icing jujubes chocolate bar jelly-o sugar plum gummies. Macaroon icing tart marzipan carrot cake. Danish donut tootsie roll pie pastry tootsie roll dragée. Jelly beans candy shortbread pie sesame snaps sugar plum chocolate bar topping wafer.'
			/>
			<Marquee>
				{ products.slice(0,3).map(product => 
					<ProductCard varient="slim" key={product.id}product={product}/>
					) }
			</Marquee>
			<Grid layout="B">
				{ products.slice(0,3).map(product => 
					<ProductCard key={product.id} product={product}/>
					) }
			</Grid>
			<Marquee variant={'secondary'}>
				{ products.slice(0,3).map(product => 
					<ProductCard varient="slim" key={product.id} product={product}/>
					) }
			</Marquee>
		</>
	)
}

Home.Layout = Layout
