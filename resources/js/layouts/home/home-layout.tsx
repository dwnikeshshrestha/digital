import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/NavBar';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function HomeLayout({ children }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
