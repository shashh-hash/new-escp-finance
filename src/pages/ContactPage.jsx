import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C]">
            <Header />

            {/* Hero */}
            <section className="bg-[#051C2C] pt-24 pb-16 border-b border-white/10">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h1 className="text-5xl font-light tracking-tight text-white mb-2">Contact Us</h1>
                    <p className="text-gray-400 text-lg">Get in touch with our team</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 flex-1">
                <div className="container mx-auto px-8 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-light text-white mb-6">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#042440] border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#042440] border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#042440] border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full px-4 py-3 bg-[#042440] border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-white text-[#051C2C] font-medium hover:bg-gray-200 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-light text-white mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Email</h3>
                                    <p className="text-white">escpstudentsforfinance@gmail.com</p>
                                </div>
                                <div>
                                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Location</h3>
                                    <p className="text-white">ESCP Business School<br />Turin Campus<br />Italy</p>
                                </div>
                                <div>
                                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Social Media</h3>
                                    <div className="flex gap-4">
                                        <a href="https://www.linkedin.com/company/escp-studenst-for-finance/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">LinkedIn</a>
                                        <a href="https://www.instagram.com/escpstudentsforfinance?igsh=MTh3NXBzbnplcG1sbg==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
