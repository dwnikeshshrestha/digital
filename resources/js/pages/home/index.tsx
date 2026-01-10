import Hero from '@/components/home/Hero';
import WhyUs from '@/components/home/WhyUs';
import HomeLayout from '@/layouts/home/home-layout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Home() {
    const { auth } = usePage<SharedData>().props;
    // console.log("auth", auth);
    const siteLocation = window.location.href;

    const projects = [
        {
            title: 'Boost Your Visibility',
            description: 'Unlock higher rankings and organic traffic with our expert SEO services." (Link to SEO section on Services page)',
            link: 'https://stripe.com',
        },
        {
            title: 'Engage Your Audience',
            description: `Connect and convert with dynamic social media marketing campaigns." (Link to SMM section on Services page)`,
            link: 'https://netflix.com',
        },
        {
            title: 'Build Your Digital Foundation',
            description: `Create stunning, high-performance websites that captivate and convert." (Link to Web Development section on Services page)`,
            link: 'https://google.com',
        },
        {
            title: 'Holistic Growth',
            description: `Experience comprehensive online growth with our integrated 360 digital marketing solutions." (Link to 360 Digital Marketing section on Services page)`,
            link: 'https://meta.com',
        },
        {
            title: 'Web Design',
            description: `Experience comprehensive online growth with our integrated 360 digital marketing solutions." (Link to 360 Digital Marketing section on Services page)`,
            link: 'https://meta.com',
        },
        {
            title: 'Responsive Web Design',
            description: `Experience comprehensive online growth with our integrated 360 digital marketing solutions." (Link to 360 Digital Marketing section on Services page)`,
            link: 'https://meta.com',
        },
        {
            title: 'Website Redesign',
            description: `Experience comprehensive online growth with our integrated 360 digital marketing solutions." (Link to 360 Digital Marketing section on Services page)`,

            link: 'https://meta.com',
        },
        {
            title: 'UI/UX Design',
            description: `Experience comprehensive online growth with our integrated 360 digital marketing solutions." (Link to 360 Digital Marketing section on Services page)`,
            link: 'https://meta.com',
        },
    ];
    return (
        <>
            <Head title="Home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="canonical" href={siteLocation} />
                <title>Digital Astra - Your Digital Marketing Partner</title>
                <meta name="title" content="Top Digital Marketing Agency in Nepal: Boost Your Online Presence" />
                <meta
                    name="keywords"
                    content="Digital Marketing Agency Nepal,SEO Services Nepal,Social Media Marketing Nepal,PPC Advertising Nepal,and Content Marketing Nepal."
                />
                <meta
                    name="description"
                    content="We provide comprehensive digital marketing services in Nepal, helping businesses achieve their online goals."
                />
                <meta property="og:url" content={siteLocation} />
                <meta property="og:site_name" content="Digital Astra" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Insurance - Compare & Buy Insurance Plans – Health, Term, Life, NonLife, Travel, vehicle" />
                <meta property="og:description" content="Digital Marketing Agency Nepal" />
                <meta property="og:image" content="/assets/images/Ebeema-favicon.webp" />
            </Head>
            <HomeLayout>
                <Hero />
                <WhyUs/>
                {/* <section className="bg-[#d5e0e6] px-3 py-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="mt-8 space-y-2">
                                <h1 className="text-3xl font-bold">Creative Web Agency Delivering Custom Solutions</h1>

                                <ul className="mt-10 leading-relaxed">
                                    <li>Results-Driven Strategies: We focus on measurable outcomes for your business</li>
                                    <li>Expert Team: Our specialists are at the forefront of digital innovation.</li>
                                    <li>Client-Centric Approach: Your success is our priority.</li>
                                </ul>
                            </div>
                            <div>
                                <img src="images/banner.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mx-auto max-w-7xl px-8">
                    <h3 className="mt-15 text-center text-3xl font-bold">Our Services</h3>
                    <HoverEffect items={projects} />
                </section>
                <section>
                    <TimelineDemo />
                </section> */}
            </HomeLayout>
        </>
    );
}
