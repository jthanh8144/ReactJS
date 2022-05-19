import BannerTop from "~/components/BannerTop";
import Brand from "~/components/Brand";
import HotProducts from "~/components/HotProducts";
import InstockProducts from "~/components/InstockProducts";
import NewProducts from "~/components/NewProducts";

function Home() {
    return (
        <>
            <BannerTop />
            <Brand />
            <NewProducts />
            <InstockProducts />
            <HotProducts />
        </>
    );
}

export default Home;
