import "@styles/global.scss";
import {AppProps} from "next/app";
import {useRouter} from "next/router";
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    const {pathname} = useRouter()

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
