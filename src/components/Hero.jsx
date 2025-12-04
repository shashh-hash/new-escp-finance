import React, { memo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroVideo from '../assets/hero_bg_compressed.mp4';

const Hero = memo(() => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        // Lazy load video after page is interactive
        const loadVideo = () => {
            const video = videoRef.current;
            if (!video || videoLoaded) return;

            // Set video source to trigger loading
            video.muted = true;
            video.defaultMuted = true;
            video.volume = 0;

            // Load and play video
            video.load();
            setVideoLoaded(true);

            const attemptPlay = () => {
                video.muted = true;
                const playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log('Video loaded and playing');
                        })
                        .catch(err => {
                            console.log('Autoplay prevented:', err);
                        });
                }
            };

            video.addEventListener('canplay', attemptPlay, { once: true });
        };

        // Delay video loading until page is interactive
        if (document.readyState === 'complete') {
            // Page already loaded
            setTimeout(loadVideo, 500);
        } else {
            // Wait for page load
            window.addEventListener('load', () => setTimeout(loadVideo, 500));
        }

        return () => {
            window.removeEventListener('load', loadVideo);
        };
    }, [videoLoaded]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        arrows: false,
        pauseOnHover: false,
        beforeChange: (current, next) => setCurrentSlide(next),
        appendDots: dots => (
            <div style={{ bottom: "40px" }}>
                <ul className="m-0 p-0 flex justify-center gap-3"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className={`w-12 h-1 transition-all duration-300 rounded-full cursor-pointer ${i === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}></div>
        )
    };

    const slides = [
        {
            title: "ESCP Students for Finance",
            subtitle: "Discover a new chapter at the Turin Campus",
            cta: "Read Our Mission",
            link: "/about"
        },
        {
            title: "Meet the Team",
            subtitle: "Building the future of finance at ESCP",
            cta: "View Team",
            link: "/team"
        },
        {
            title: "Market Momentum",
            subtitle: "Explore the latest articles and market analysis",
            cta: "Read Articles",
            link: "/articles"
        }
    ];

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-black">
            {/* Background Video (Fixed) */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10"></div> {/* Gradient */}

                {/* Poster Background - Shows Instantly */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url(/hero-poster.jpg)' }}
                />

                {/* Video - Loads After */}
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    preload="none"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-90' : 'opacity-0'}`}
                    style={{ backgroundColor: 'transparent' }}
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Slider Content (Z-20) */}
            <div className="relative z-20 h-full">
                <Slider {...settings} className="h-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="relative w-full h-[85vh] min-h-[600px] outline-none">
                            <div className="h-full flex items-center justify-center text-center">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                                    <div className="max-w-5xl mx-auto">
                                        {/* Animate content only when slide is active */}
                                        {index === currentSlide && (
                                            <>
                                                <motion.h1
                                                    initial={{ opacity: 0, y: 40 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 drop-shadow-2xl"
                                                >
                                                    {slide.title}
                                                </motion.h1>

                                                <motion.p
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                                    className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                                                >
                                                    {slide.subtitle}
                                                </motion.p>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                                                    className="flex justify-center"
                                                >
                                                    <Link
                                                        to={slide.link}
                                                        className="px-8 py-4 bg-white text-black rounded-full text-base font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                                    >
                                                        {slide.cta}
                                                    </Link>
                                                </motion.div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto animate-pulse"></div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
