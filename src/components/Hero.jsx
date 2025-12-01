import React, { memo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroVideo from '../assets/hero_bg_new.mp4';

const Hero = memo(() => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRef = useRef(null);
    const [videoPlaying, setVideoPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Safari-specific: Set all muted properties
        video.muted = true;
        video.defaultMuted = true;
        video.volume = 0;

        const playVideo = async () => {
            try {
                // Ensure muted before playing
                video.muted = true;
                video.volume = 0;

                await video.play();
                console.log('Video playing successfully');
                setVideoPlaying(true);
            } catch (err) {
                console.error('Autoplay failed:', err);
                // Safari fallback: try again after a short delay
                setTimeout(async () => {
                    try {
                        video.muted = true;
                        await video.play();
                        setVideoPlaying(true);
                    } catch (e) {
                        console.error('Retry failed:', e);
                    }
                }, 500);
            }
        };

        // Use Intersection Observer - Safari allows autoplay when element is visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && video.paused) {
                        playVideo();
                    }
                });
            },
            { threshold: 0.25 }
        );

        observer.observe(video);

        // Also try to play on various events
        const handleLoadedMetadata = () => {
            console.log('Video metadata loaded');
            playVideo();
        };

        const handleCanPlay = () => {
            console.log('Video can play');
            if (video.paused) {
                playVideo();
            }
        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('canplay', handleCanPlay);

        // Initial play attempt
        video.load();
        setTimeout(() => playVideo(), 100);

        // Cleanup
        return () => {
            observer.disconnect();
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('canplay', handleCanPlay);
        };
    }, []);

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
            link: "/mission"
        },
        {
            title: "Meet the Team",
            subtitle: "Building the future of finance at ESCP",
            cta: "View Team",
            link: "/about"
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
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                    x-webkit-airplay="allow"
                    preload="auto"
                    controls={false}
                    className="w-full h-full object-cover opacity-90 cursor-pointer"
                    onClick={(e) => {
                        if (e.target.paused) {
                            e.target.muted = true;
                            e.target.play();
                        }
                    }}
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
