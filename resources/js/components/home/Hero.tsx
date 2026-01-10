import { Button } from '@/components/ui/button';
import { ThreeDMarquee } from '../ui/3d-marquee';
const images = [
    '/images/works/sunrise.png',
    '/images/works/sunrise.png',
    '/images/works/sunrise.png',
    '/images/works/sunrise.png',
    '/images/works/sunrise.png',
    '/images/works/sunrise.png',
    '/images/works/sunrise.png',
    '/images/works/sunrisenew.png',
    '/images/works/ebeema.png',
    '/images/works/shikhar.png',
    '/images/works/oriental.png',
    '/images/works/dashboard-mobile-view.png',
    'https://assets.aceternity.com/glare-card.png',
    'https://assets.aceternity.com/layout-grid.png',
    '/images/works/oriental-gird.png',
    '/images/works/shikhardashboard.png',
    '/images/works/sunrise.png',
    '/images/works/sunrisenew.png',
    'https://assets.aceternity.com/flip-text.png',
    'https://assets.aceternity.com/hero-highlight.png',
    'https://assets.aceternity.com/carousel.webp',
    '/images/works/ebeema.png',
    '/images/works/shikhar.png',
    '/images/works/oriental.png',
    '/images/works/dashboard-mobile-view.png',
    '/images/works/oriental-gird.png',
    '/images/works/shikhardashboard.png',
    '/images/works/sunrise.png',
    '/images/works/hrit.png',
    '/images/works/hrit-dashboard.png',
    '/images/works/hrit-roles.png',
    '/images/works/sunrisenew.png',
    '/images/works/ebeema.png',
    '/images/works/shikhar.png',
    '/images/works/oriental.png',
    '/images/works/dashboard-mobile-view.png',
    '/images/works/oriental-gird.png',
    '/images/works/shikhardashboard.png',
    '/images/works/sunrise.png',
    '/images/works/sunrisenew.png',
    '/images/works/ebeema.png',
    '/images/works/shikhar.png',
    '/images/works/oriental.png',
    '/images/works/dashboard-mobile-view.png',
    '/images/works/oriental-gird.png',
    '/images/works/shikhardashboard.png',
    '/images/works/sunrise.png',
    '/images/works/hrit.png',
    '/images/works/hrit-dashboard.png',
    '/images/works/hrit-roles.png',
];
export default function Hero() {
    return (
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
                <div className="absolute inset-0 z-10 h-full w-full bg-black/60 dark:bg-black/40" />
                <ThreeDMarquee className="pointer-events-none absolute inset-0 h-full w-full" images={images} />
            </div>
        </section>
    );
}
