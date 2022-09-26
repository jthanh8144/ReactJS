import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import brandApi from "~/api/brandApi";

function Brand() {
    const [listBrand, setListBrand] = useState([]);

    useEffect(() => {
        const fetchBrandList = async () => {
            try {
                const response = await brandApi.getAll();
                setListBrand(response);
            } catch (error) {
                console.log("Failed: ", error);
            }
        };
        fetchBrandList();
    }, []);

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
                            {listBrand.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <Link
                                        to={`/brands/${brand.id}/products`}
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
