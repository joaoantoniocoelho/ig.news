import {AppProps} from "next/app";
import "../styles/global.scss";
import Header from "../components/Header";
import {Provider} from "next-auth/client";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <Header/>
            <Component {...pageProps} />
        </Provider>
    )
}
