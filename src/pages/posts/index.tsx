import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss"
import {GetStaticProps} from "next";
import {getPrismicClient} from "../../services/prismic";
import Prismic from "@prismicio/client";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | ig.news</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Título do Post</strong>
                        <p>Breve parágrafo do post...</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Título do Post</strong>
                        <p>Breve parágrafo do post...</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Título do Post</strong>
                        <p>Breve parágrafo do post...</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query(
        [Prismic.predicates.at('document.type', 'publication')], {
            fetch: ['publication.title', 'publication.content'],
            pageSize: 100,
        }
    );

    console.log('response: ', response);

    return {
        props: {}
    }
}