import Head from 'next/head'
import styles from './home.module.scss';
import SubscribeButton from "../components/SubscribeButton";
import {GetStaticProps} from "next";
import {stripe} from "../services/stripe";
import {formatCurrency} from "../utils/formatCurrency";

interface HomeProps {
    product: {
        priceId: string;
        amount: number;
    }
}

export default function Home({product}: HomeProps) {
    return (
        <>
            <Head><title>Home | ig.news</title></Head>

            <main className={styles.contentContainer}>
                <section className={styles.hero}>
                    <span>👏 Hey , welcome</span>
                    <h1>News about the <span>React</span> world.</h1>
                    <p>Get access to all the publications for<br/>
                        <span>{product.amount} month</span>
                    </p>
                    <SubscribeButton priceId={product.priceId}/>
                </section>

                <img src="/images/avatar.svg" alt="girl coding"/>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const price = await stripe.prices.retrieve('price_1MMlSdCwIvAKwdKYDAaGZpLz');

    const product = {
        priceId: price.id,
        amount: formatCurrency('en-US', 'USD', price.unit_amount / 100),
    }

    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24, // 24 hours
    }
}

new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format((500))