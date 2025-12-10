import { TimelineDemo } from '@/components/home/time-line';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';
import { Button } from '@/components/ui/button';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import HomeLayout from '@/layouts/home/home-layout';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Home() {
    const { auth } = usePage<SharedData>().props;
    // console.log("auth", auth);
    const siteLocation = window.location.href;
    const images = [
      '/images/works/sunrise.png',
      '/images/works/sunrise.png',
      '/images/works/sunrise.png',
      '/images/works/sunrise.png',
      '/images/works/sunrise.png',
      '/images/works/sunrise.png',
      '/images/works/sunrise.png',
    ];

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
                <section className="">
                    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
                        <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
                            Launch Your Brand into the Digital Stratosphere with
                            <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
                                Digital Astras
                            </span>{' '}
                        </h2>
                        <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
                            Strategic Digital Marketing Solutions for Sustainable Business Growth.
                        </p>

                        <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
                            <Button>Get Your Free Consult</Button>

                            <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                                Read more
                            </button>
                        </div>

                        {/* overlay */}
                        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
                        <ThreeDMarquee className="pointer-events-none absolute inset-0 h-full w-full" images={images} />
                    </div>
                    <div className='bg-[#d5e0e6] px-3 py-10'>
                    <div className='max-w-7xl mx-auto'>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className='space-y-2 mt-8'>
                                <h1 className='text-3xl font-bold'>Creative Web Agency Delivering Custom Solutions</h1>

                                <ul className='leading-relaxed mt-10'>
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
                    </div>
                    <div className="mx-auto max-w-7xl px-8">
                        <h3 className='text-center font-bold text-3xl  mt-15'>Our Services</h3>
                        <HoverEffect items={projects} />
                    </div>
                    <div>
                        <TimelineDemo/>
                    </div>
                </section>
            </HomeLayout>
        </>
    );
}
