import { Facebook, Instagram } from 'lucide-react';

import { Button } from '../ui/button';

export function NavigationMenuDemo() {
    return (
        <div className="font-brand">
            <div className="flex items-center justify-between">
                <div>
                    <img src="/logo.png" alt="company-logo" width={280} height={80} />
                </div>
                <ul className="flex items-center gap-4">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li></li>
                </ul>
                <div className="flex items-center justify-between gap-2">
                    <div className="">
                        <Button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.75}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp shrink-0"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                            9841267199
                        </Button>
                    </div>

                    <ul className="flex items-center justify-between gap-2">
                        <li>
                            <Facebook size={24} />
                        </li>
                        <li>
                            <Instagram size={24} />
                        </li>
                    </ul>
                    <div>
                        <Button variant="outline">Quick Inquiry</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
