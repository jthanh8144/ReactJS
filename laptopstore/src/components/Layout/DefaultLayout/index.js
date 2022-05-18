import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Navigation />
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;
