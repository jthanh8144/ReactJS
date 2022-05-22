import { Link } from "react-router-dom";

import images from "~/assets/images";

function Footer() {
    return (
        <>
            <section className="shipping-info">
                <div className="container">
                    <ul>
                        <li>
                            <div className="media-icon">
                                <i className="lni lni-delivery"></i>
                            </div>
                            <div className="media-body">
                                <h5>Miễn phí vận chuyển</h5>
                                <span>Đối với đơn hàng trên 100.000₫</span>
                            </div>
                        </li>
                        <li>
                            <div className="media-icon">
                                <i className="lni lni-support"></i>
                            </div>
                            <div className="media-body">
                                <h5>Hỗ trợ 24/7.</h5>
                                <span>Trò chuyện trực tiếp hoặc gọi điện.</span>
                            </div>
                        </li>
                        <li>
                            <div className="media-icon">
                                <i className="lni lni-credit-cards"></i>
                            </div>
                            <div className="media-body">
                                <h5>Thanh toán trực tuyến.</h5>
                                <span>Dịch vụ thanh toán an toàn.</span>
                            </div>
                        </li>
                        <li>
                            <div className="media-icon">
                                <i className="lni lni-reload"></i>
                            </div>
                            <div className="media-body">
                                <h5>Đổi trả dể dàng.</h5>
                                <span>Mua sắm miễn phí.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="bottom-inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="single-footer f-contact">
                                        <h3>Liên hệ với chúng tôi</h3>
                                        <p className="phone">
                                            Điện thoại: 0782 378 407
                                        </p>
                                        <ul>
                                            <li>
                                                <span>Thứ hai - thứ sáu </span>9
                                                giờ sáng - 8 giờ tối
                                            </li>
                                            <li>
                                                <span>Thứ bảy: </span> 10 giờ
                                                sáng - 6 giờ chiều
                                            </li>
                                        </ul>
                                        <p className="mail">
                                            <a href="mailto:thanhvo618@gmail.com">
                                                thanhvo618@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="single-footer our-app">
                                        <h3>Ứng dụng di động của chúng tôi</h3>
                                        <ul className="app-btn">
                                            <li>
                                                <Link to="/">
                                                    <i className="lni lni-apple"></i>
                                                    <span className="small-title">
                                                        Tải xuống trên
                                                    </span>
                                                    <span className="big-title">
                                                        App Store
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i className="lni lni-play-store"></i>
                                                    <span className="small-title">
                                                        Tải xuống trên
                                                    </span>
                                                    <span className="big-title">
                                                        Google Play
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="single-footer f-link">
                                        <h3>Thông tin</h3>
                                        <ul className="no-decoration">
                                            <li>
                                                <Link to="/">Về chúng tôi</Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Liên hệ chúng tôi
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">Tải xuống</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Sơ đồ trang web</Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Câu hỏi thường gặp
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="single-footer f-link">
                                        <h3>Đường dẫn</h3>
                                        <ul>
                                            <li>
                                                <Link to="/">Trang chủ</Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Giới thiệu
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/products/">Sản phẩm</Link>
                                            </li>
                                            <li>
                                                <Link to="/feedback/">
                                                    Phản hồi
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-12">
                                    <div className="payment-gateway">
                                        <span>Chúng tôi chấp nhận:</span>
                                        <img
                                            src={images.creditCard}
                                            alt="credit"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="copyright">
                                        <p>
                                            Được thiết kế và phát triển bởi
                                            <a
                                                href="https://jthanh8144.cf"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                ©jThanh8144
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <ul className="socila">
                                        <li>
                                            <span>Theo dõi chúng tôi tại:</span>
                                        </li>
                                        <li>
                                            <a
                                                href="https://fb.com/jThanh8144"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                <i className="lni lni-facebook-filled"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://instagram.com/jthanh8144"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                <i className="lni lni-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
