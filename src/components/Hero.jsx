import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = memo(() => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        lazyLoad: 'progressive',
        appendDots: dots => (
            <div style={{ bottom: "40px" }}>
                <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-12 h-1 bg-white/30 hover:bg-white transition-colors rounded-full cursor-pointer"></div>
        )
    };

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=60&w=800",
            title: "ESCP Students for Finance",
            subtitle: "Discover a new chapter at the Turin Campus",
            cta: "Read Our Mission",
            link: "/mission"
        },
        {
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=60&w=800",
            title: "Meet the Team",
            subtitle: "Building the future of finance at ESCP",
            cta: "View Team",
            link: "/about"
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=60&w=800",
            title: "Market Momentum",
            subtitle: "Explore the latest articles and market analysis",
            cta: "Read Articles",
            link: "/articles"
        }
    ];

    return (
        <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex items-center justify-center text-center">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                                <div className="max-w-4xl mx-auto">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wide drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                    <Link
                                        to={slide.link}
                                        className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-base font-bold uppercase tracking-widest transition-all border border-white/30 hover:border-white/50 transform hover:-translate-y-1"
                                    >
                                        {slide.cta}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
