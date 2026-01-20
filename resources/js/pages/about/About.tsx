import HomeLayout from '@/layouts/home/home-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'motion/react';
import { Lightbulb, Shield, Trophy, Users } from 'lucide-react';

export default function About() {
    return (
        <HomeLayout>
            <Head title="About Us - Digital Astras" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 mix-blend-multiply"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            backgroundSize: '200% 200%',
                        }}
                    />
                </div>
                {/* Animated Decorative background effects */}
                <motion.div
                    className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    <motion.div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        animate={{
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    >
                        About Digital Astras
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto"
                    >
                        Your Trusted Digital Marketing Agency. Empowering businesses to thrive in the dynamic digital age.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div
                                className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-indigo-600"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <motion.h2
                                    className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    Our Story & Mission
                                </motion.h2>
                            </motion.div>
                            <motion.p
                                className="text-lg leading-8 text-gray-600 mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                "Digital Astras was founded with a singular vision: to empower businesses to thrive in the dynamic digital age. We believe that every brand deserves a compelling online presence and a strategic roadmap to achieve its digital aspirations.
                            </motion.p>
                            <motion.p
                                className="text-lg leading-8 text-gray-600"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Our mission is to deliver innovative, results-oriented digital marketing solutions that drive sustainable growth and measurable success for our clients."
                            </motion.p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-2xl overflow-hidden bg-gray-100 p-2 sm:p-4 ring-1 ring-inset ring-gray-900/10 group cursor-pointer"
                        >
                            {/* Placeholder for an actual team/office image - using a vibrant gradient/abstract for now */}
                            <motion.div
                                className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-90 flex items-center justify-center text-white text-xl font-medium relative overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={false}
                                />
                                <motion.span
                                    className="relative z-10"
                                    animate={{
                                        opacity: [1, 0.8, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    Visualizing Success
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 sm:py-32 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto max-w-2xl text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Core Values</h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 text-lg leading-8 text-gray-600"
                        >
                            The principles that guide every strategy we build and every relationship we nurture.
                        </motion.p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Trophy,
                                title: 'Excellence',
                                desc: 'Committing to the highest standards in every project.',
                                color: 'bg-yellow-500',
                                hoverColor: 'bg-yellow-600',
                            },
                            {
                                icon: Lightbulb,
                                title: 'Innovation',
                                desc: 'Constantly evolving with the digital landscape to bring cutting-edge solutions.',
                                color: 'bg-blue-500',
                                hoverColor: 'bg-blue-600',
                            },
                            {
                                icon: Shield,
                                title: 'Transparency',
                                desc: 'Building trust through clear communication and honest reporting.',
                                color: 'bg-green-500',
                                hoverColor: 'bg-green-600',
                            },
                            {
                                icon: Users,
                                title: 'Client Success',
                                desc: "Your goals are our goals; we're invested in your triumph.",
                                color: 'bg-indigo-500',
                                hoverColor: 'bg-indigo-600',
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-gray-900/5 cursor-pointer"
                            >
                                <motion.div
                                    className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-6 text-white relative overflow-hidden`}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className={`absolute inset-0 ${value.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        initial={false}
                                    />
                                    <motion.div
                                        className="relative z-10"
                                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <value.icon className="w-6 h-6" />
                                    </motion.div>
                                </motion.div>
                                <motion.h3
                                    className="text-xl font-semibold text-gray-900 mb-3"
                                    whileHover={{ color: '#4f46e5' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {value.title}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-600"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {value.desc}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto max-w-3xl"
                    >
                        <motion.h2
                            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Our Experts
                        </motion.h2>
                        <motion.p
                            className="text-lg leading-8 text-gray-600"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            "Behind every successful campaign at Digital Astras is a team of passionate and experienced digital marketing specialists. Our experts in SEO, SMM, and web development bring a wealth of knowledge and creativity to help your business grow."
                        </motion.p>
                    </motion.div>
                </div>
            </section>
        </HomeLayout>
    );
}
