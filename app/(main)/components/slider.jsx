"use client"
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SliderBar() {
    var settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true
    };

    return (
        <nav className="continer_slider">
            <Slider {...settings}>
                <div className="slider_div">
                    <Image src="/image/download (1)_11zon.png" alt="img" width={100} height={100} />
                </div>
                <div className="slider_div">
                    <Image src="/image/download (2).jpg" alt="img" width={100} height={100} />
                </div>
                <div className="slider_div">
                    <Image src="/image/download_11zon.png" alt="img" width={100} height={100} />
                </div>
            </Slider>
        </nav>
    );
}