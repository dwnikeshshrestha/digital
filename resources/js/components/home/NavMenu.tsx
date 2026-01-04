import { Facebook, Instagram } from 'lucide-react';
import * as React from 'react';

import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description: 'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
];
//   <div className="">
//                      <Button>
//                         <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                             width={50}
//                            height={50}
//                            viewBox="0 0 24 24"
//                           fill="none"
//                            stroke="currentColor"
//                            strokeWidth={1.75}
//                            strokeLinejoin="round"
//                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp shrink-0"
//                         >
//                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
//                             <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
//                          </svg>
//                       9841267199
//                     </Button>
//                  </div>
export function NavigationMenuDemo() {
    const isMobile = useIsMobile();

    return (
        <div>
            {/* <div className="grid grid-cols-2 gap-4">
                <div>
                    <img src="/logo.png" alt="company-logo" width={280} height={80} />
                </div>
                <div>
                    <div className="flex items-center justify-end gap-2">
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
                    <div className='flex justify-between'>
                        <ul className='flex items-center gap-4'>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Contact us</li>
                        </ul>

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

                    </div>
                      
                </div>
            </div> */}

            <div className="flex items-center justify-between">
                <div>
                    <img src="/logo.png" alt="company-logo" width={280} height={80} />
                </div>
                <ul className="flex items-center gap-4">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Contact us</li>
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

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}
