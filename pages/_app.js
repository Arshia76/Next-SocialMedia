import '../public/Resource/Stylesheets/reset.css';
import '../public/Resource/Stylesheets/config.css';
import '../public/Resource/Stylesheets/fontiran.css';
import '../public/Resource/Stylesheets/responsive.css';
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/components/Sidebar.scss'
import '../styles/components/Select2.css'
import '../styles/components/Carousel.css'
import Layout from "../projectComponents/Layout";
import {useRouter} from "next/router";
import Resource from "../public/Resource";


function MyApp({Component, pageProps}) {
    const router = useRouter()

    if (router.pathname === Resource.Routes.HOME) {
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    } else {
        return <Component {...pageProps} />
    }


}

export default MyApp
