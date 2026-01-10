import Footer from '@/components/layouts/Footer';
import NavBar from '@/components/layouts/NavBar';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function HomeLayout({ children }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <>
            <NavBar />
            <main className='mt-20 font-brand'>{children}</main>
            <Footer />
        </>
    );
}
