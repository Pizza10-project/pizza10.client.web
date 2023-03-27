
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Stripe from 'stripe'
import { GeneralMenuScreen } from '../../screens/Menu/GeneralMenu'
import { stripe } from '../../services/stripe'


export const Menu: NextPage = () => {
    return (
        <GeneralMenuScreen />
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    });


    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price;

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: price,
        }
    })

    console.log(products)

    return {
        props: {
            products
        }
    }
}

export default Menu;