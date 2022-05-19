import Carousel from "react-bootstrap/Carousel";

import images from "~/assets/images";

function BannerTop() {
    return (
        <div className="section pd-top-10">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8 col-12 banner-left">
                        <Carousel
                            fade
                            style={{ maxHeight: "200px", maxWidth: "800px" }}
                        >
                            <Carousel.Item>
                                <img
                                    alt="banner"
                                    src={images.bnLeft1}
                                    width="800"
                                    height="200"
                                    className="img-fluid w-100 d-block"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    alt="banner"
                                    src={images.bnLeft2}
                                    width="800"
                                    height="200"
                                    className="img-fluid w-100 d-block"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    alt="banner"
                                    src={images.bnLeft3}
                                    width="800"
                                    height="200"
                                    className="img-fluid w-100 d-block"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    alt="banner"
                                    src={images.bnLeft4}
                                    width="800"
                                    height="200"
                                    className="img-fluid w-100 d-block"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    alt="banner"
                                    src={images.bnLeft5}
                                    width="800"
                                    height="200"
                                    className="img-fluid w-100 d-block"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12 banner-right">
                        <div className="">
                            <img
                                src={images.bnRight1}
                                className="img-fluid"
                                alt="banner"
                            />
                        </div>
                        <div className="pd-top-10">
                            <img
                                src={images.bnRight2}
                                className="img-fluid"
                                alt="banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerTop;
