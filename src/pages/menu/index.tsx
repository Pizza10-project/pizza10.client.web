
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Stripe from 'stripe'
import { MenuInterface, PizzaInterface } from '../../models/interfaces/general/menu.interface'
import { GeneralMenuScreen } from '../../screens/Menu/GeneralMenu'
import { stripe } from '../../services/stripe'


export const Menu = ({ pizzas }: MenuInterface) => {
    console.log(pizzas)

    return (
        <GeneralMenuScreen pizzas={pizzas} />
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({ expand: ['data.default_price'] })

    const pizzas = response.data.map(product => {
        const price = product.default_price as Stripe.Price
        const priceUnique: number = price.unit_amount || 0

        return {
            id: product.id,
            name: product.name,
            description: product.description,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(priceUnique / 100),
        }
    })

    return {
        props: {
            pizzas,
        },

        revalidate: 60 * 60 * 2 //2 horas
    }
}
export default Menu;