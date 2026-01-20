import { Button } from '@headlessui/react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import React from 'react';

function Services() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24 sm:py-32">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-0 right-0 -z-10 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-gradient-to-tr from-pink-200/30 to-blue-200/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative inline-block"
                    >
                        <motion.span
                            className="absolute -top-2 -right-2 text-indigo-500"
                            animate={{
                                rotate: [0, 15, -15, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <Sparkles className="w-6 h-6" />
                        </motion.span>
                        <motion.h2
                            className="font-semibold text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ['0%', '100%', '0%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            style={{
                                backgroundSize: '200% auto',
                            }}
                        >
                            Our Services
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 text-lg/8 text-gray-600 max-w-xl mx-auto"
                    >
                        "We offer a wide range of services to help you grow your business online."
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-10 flex flex-wrap gap-4 justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                as="button"
                                className="group relative overflow-hidden rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/50 transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Your Free Consult
                                    <motion.span
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.span>
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={false}
                                />
                            </Button>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative overflow-hidden rounded-lg border-2 border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Read more
                                <motion.span
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </motion.span>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={false}
                            />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Services;