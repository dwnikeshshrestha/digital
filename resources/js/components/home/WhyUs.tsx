import { Target, Users, Zap } from 'lucide-react';
import ContainerWrapper from '../layouts/containerWrapper';

export default function WhyUs() {
    const features = [
        {
            icon: Target,
            title: 'Web Design',
            description: 'We are deeply committed to your unique business objectives, ensuring every strategy aligns with your goals.',
        },
        {
            icon: Users,
            title: 'Responsive Web Design',
            description: "We don't just execute campaigns; we build lasting relationships and become a dedicated extension of your marketing team.",
        },

        {
            icon: Zap,
            title: 'SEO Optimization',
            description: 'Our focus is on your long-term online prosperity, driving sustainable growth and measurable results.',
        },
    ];

    return (
        <ContainerWrapper>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h1 className="text-primary text-3xl font-bold">Why Digital Astras?</h1>
                    <h2 className="my-3 line-clamp-3 text-5xl leading-[1.15] font-bold">Discover Our Expertise as a Web Design Company</h2>

                    <p className="my-15 leading-relaxed">
                        As a full-service web design agency, we handle all your digital needs under one roof. Our custom web design services include
                        thorough research and planning, bespoke designs and digital strategies tailored to grow your reach, drive traffic and
                        encourage engagement.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="relative mt-4 space-y-6 rounded-lg bg-amber-100 p-6">
                            <div className="flex justify-between">
                                <feature.icon className="text-primary mt-1 h-16 w-16" />
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">{feature.title}</h3>
                                <p className="">{feature.description}</p>
                            </div>
                            <div className="absolute inset-y-0 top-auto right-[10px] left-1/2 z-0 w-auto  transition-all duration-300">
                                <img src="/images/works/sunrise.png" alt="" height={200} width={250} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ContainerWrapper>
    );
}
