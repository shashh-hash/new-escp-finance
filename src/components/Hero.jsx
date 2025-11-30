import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = memo(() => {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10"></div> {/* Gradient */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    <source src="https://videos.pexels.com/video-files/3191288/3191288-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-widest uppercase mb-6">
                                Turin Campus
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 drop-shadow-2xl"
                        >
                            ESCP Students <br />
                            <span className="font-bold">for Finance</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
                        >
                            Bridging the gap between academic theory and professional practice.
                            Join the leading finance society at ESCP Business School.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                to="/mission"
                                className="px-8 py-4 bg-white text-black rounded-full text-base font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                            >
                                Our Mission
                            </Link>
                            <Link
                                to="/articles"
                                className="px-8 py-4 bg-transparent border border-white text-white rounded-full text-base font-bold uppercase tracking-widest hover:bg-white/10 transition-all transform hover:-translate-y-1 backdrop-blur-sm"
                            >
                                Latest Insights
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
            </motion.div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
