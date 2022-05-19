import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Brand() {
    const [listBrand, setListBrand] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await fetch(`http://laptopstoreapi-jthanh8144.herokuapp.com/brand/`)
                .then((res) => res.json())
                .then((res) => {
                    setListBrand(res);
                    console.log(listBrand);
                    setLoading(false);
                });
        }
        fetchData();
        // eslint-disable-next-line
    }, [loading]);

    return (
        <div className="pd-top-20 pd-bt-30">
            <div className="container">
                <div className="head-brand">
                    <div className="body-brand">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            slidesPerView={6}
                            spaceBetween={10}
                        >
                            {!loading &&
                                listBrand.map((brand) => (
                                    <SwiperSlide key={brand.id}>
                                        <Link
                                            to={`/products/search/${brand.brand_name}`}
                                        >
                                            <img
                                                alt="brand"
                                                className="img-fluid rounded mx-auto d-block"
                                                src={brand.img}
                                            />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;
