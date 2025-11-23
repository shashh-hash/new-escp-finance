import React, { memo } from 'react';
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
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
            title: "ESCP Students for Finance",
            subtitle: "The New Chapter – Turin Campus",
            cta: "Read Our Vision"
        },
        {
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
            title: "Meet the Founding Board",
            subtitle: "Building the future of finance at ESCP",
            cta: "View Team"
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
            title: "Student Insights",
            subtitle: "Latest articles and market analysis",
            cta: "Read Articles"
        }
    ];

    return (
        <div className="relative bg-[#051C2C] text-white overflow-hidden">
            <Slider {...settings} className="h-[600px] lg:h-[700px]">
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-[600px] lg:h-[700px] outline-none">
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start container mx-auto px-6 lg:px-12">
                            <div className="max-w-3xl">
                                <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-tight mb-6 drop-shadow-lg">
                                    {slide.title}
                                    <br />
                                    <span className="text-3xl lg:text-5xl text-gray-200 mt-2 block">{slide.subtitle}</span>
                                </h1>

                                <button
                                    onClick={() => alert(`Navigating to: ${slide.cta}`)}
                                    className="mt-8 px-8 py-3 bg-[#C5A059] hover:bg-[#b08d4d] text-white rounded-full text-sm font-bold uppercase tracking-widest transition-colors shadow-lg"
                                >
                                    {slide.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
});

Hero.displayName = 'Hero';

export default Hero;
