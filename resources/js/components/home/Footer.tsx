import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    const quickLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Our Services', href: '#services' },
        { name: 'Case Studies', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        { name: 'SEO Optimization', href: '#' },
        { name: 'PPC Advertising', href: '#' },
        { name: 'Social Media', href: '#' },
        { name: 'Content Marketing', href: '#' },
        { name: 'Email Marketing', href: '#' },
    ];
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                            Digital Astra
                        </h3>
                        <p className="text-gray-400">
                            Transforming businesses through innovative digital marketing strategies that deliver measurable results and sustainable
                            growth.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="text-gray-400 transition-colors duration-200 hover:text-blue-400"
                                >
                                    <social.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-gray-400 transition-colors duration-200 hover:text-white">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Services</h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href={service.href} className="text-gray-400 transition-colors duration-200 hover:text-white">
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
                        <div className="space-y-3">
                            {/* <div className="flex items-center">
                                <Mail className="mr-3 h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">hello@digitalpro.com</span>
                            </div> */}
                            <div className="flex items-center">
                                <Phone className="mr-3 h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">+9779861469843</span>
                            </div>
                              <div className="flex items-center">
                                <Phone className="mr-3 h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">+9779843755899</span>
                            </div>
                            {/* <div className="flex items-center">
                                <MapPin className="mr-3 h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">
                                    123 Business Ave, Suite 100
                                    <br />
                                    City, State 12345
                                </span>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <p className="text-sm text-gray-400">© 2024 Digital Astra. All rights reserved.</p>
                        <div className="mt-4 flex space-x-6 md:mt-0">
                            <a href="#" className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
