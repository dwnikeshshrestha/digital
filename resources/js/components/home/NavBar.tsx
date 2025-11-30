import { ChevronDown, Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
export const menuLists = [
    {
        services: [
            {
                title: 'BRANDING',
                subMenus: [
                    {
                        title: 'Branding Services',
                        link: '',
                    },
                    {
                        title: 'Logo Design',
                        link: '',
                    },
                    {
                        title: 'Brand Identity',
                        link: '',
                    },
                    {
                        title: 'Graphics Design',
                        link: '',
                    },
                    {
                        title: 'Brand Marketing',
                        link: '',
                    },
                ],
            },

            {
                title: 'WEB DESIGN',
                subMenus: [
                    {
                        title: 'Custom Website Design',
                        link: '',
                    },
                    {
                        title: 'WordPress Web Design',
                        link: '',
                    },
                    {
                        title: 'eCommerce Web Design',
                        link: '',
                    },
                ],
            },

            {
                title: 'MARKETING',
                subMenus: [
                    {
                        title: 'Search Engine Optimization',
                        link: '',
                    },
                    {
                        title: 'Social Media Marketing',
                        link: '',
                    },
                    {
                        title: 'Consulting Services',
                        link: '',
                    },
                    {
                        title: 'Before & After Designs',
                        link: '',
                    },
                ],
            },
        ],

        workByIndustry: [
            {
                title: 'Work By Industry',
                link: '',
                subMenus: [
                    { title: 'Before After', link: '' },
                    { title: 'Auto Repair Web Design', link: '' },
                    { title: 'Bank Web Design', link: '' },
                    { title: 'Corporate Web Design', link: '' },
                    { title: 'Construction Web Design', link: '' },
                    { title: 'Dental Web Design', link: '' },
                    { title: 'Family Law Attorney Web Design', link: '' },
                    { title: 'Financial Advisor Web Design', link: '' },
                    { title: 'Gym Web Design', link: '', break: 1 },
                    { title: 'Healthcare Web Design', link: '' },
                    { title: 'Hotel Web Design', link: '' },
                    { title: 'HVAC Web Design', link: '' },
                    { title: 'Law Firm Web Design', link: '' },
                    { title: 'Manufacturing Web Design', link: '' },
                    { title: 'Plumber Web Design', link: '' },
                    { title: 'Restaurant Web Design', link: '' },
                    { title: 'Real Estate Web Design', link: '' },
                    { title: 'Venture Capital Web Design', link: '' },
                ],
            },
        ],
    },
];

export default function NavBar() {
    const drawerRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            if (drawerRef.current && !drawerRef.current.contains(target) && toggleRef.current && !toggleRef.current.contains(target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
        <header className="">
            <nav className="nav-menu h-[122px]">
                <div className="flex items-center justify-between p-4">
                    <img
                        src="/images/logodaedit.png"
                        alt="Digital astra company logo"
                        className="h-[90px] w-[150px] cursor-pointer object-contain"
                        loading="lazy"
                    />

                    <div className="flex items-center gap-4">
                        {/* <Link href="/about" className=''>
                      <Button className='nav-button'>REQUEST A QUOTE</Button>
                        </Link> */}

                        <div className="flex gap-2 text-white" onClick={() => setOpen((prev) => !prev)} ref={toggleRef}>
                            <Menu />

                            <span>Menu</span>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className={`drawer absolute top-[166px] z-30 h-[calc(100vh-99px)] w-[750px] overflow-y-auto bg-white p-6 md:right-0 ${open ? 'block' : 'hidden'}`}
                ref={drawerRef}
            >
                <ul className="menu-list space-y-4 text-sm text-zinc-900">
                    <li>
                        <label htmlFor="services-toggle" className="mb-2 flex cursor-pointer gap-2 font-semibold">
                            <input id="services-toggle" type="checkbox" hidden className="peer" />
                            SERVICES
                            <ChevronDown className="transition-transform duration-200 peer-checked:rotate-180" size={20} />
                        </label>
                        <ul className="grid gap-4 md:grid-cols-3">
                            <li className="font-medium text-blue-600 md:col-span-3">VIEW ALL SERVICES</li>
                            {menuLists[0]?.services.map((item) => (
                                <li key={item.title}>
                                    <div className="mb-2 font-medium">{item.title}</div>
                                    <ul className="sub-menu-list ml-2 space-y-2 text-zinc-700">
                                        {item.subMenus.map((subMenu) => (
                                            // <div className="flex gap-1 items-center hover:rotate-0">
                                            <li key={subMenu.title} className="cursor-pointer transition-colors duration-200 hover:text-blue-500">
                                                {subMenu.title}
                                            </li>
                                            // </div>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="font-semibold">CASE STUDIES</li>
                    <li>
                        <label htmlFor="work-toggle" className="mb-2 flex cursor-pointer gap-2 font-semibold">
                            <input id="work-toggle" type="checkbox" hidden className="peer" />
                            WORK BY INDUSTRY
                            <ChevronDown className="transition-transform duration-200 peer-checked:rotate-180" size={20} />
                        </label>
                        {menuLists[0]?.workByIndustry.map((item) => (
                            <ul className="sub-menu-list grid gap-4 md:grid-cols-2" key={item.title}>
                                {item.subMenus.map((subMenu) => (
                                    <li key={subMenu.title}>{subMenu.title}</li>
                                ))}
                            </ul>
                        ))}
                    </li>
                    <li className="font-semibold">DIGITAL TRENDS</li>
                    <li className="font-semibold">ABOUT</li>
                    <li className="font-semibold">CONTACT US</li>
                </ul>
            </div>
        </header>
    );
}
