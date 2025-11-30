import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { router } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Password settings',
        href: '/settings/password',
    },
];
interface MenuItem {
    id: string;
    title: string;
    url: string;
    type: 'page' | 'custom' | 'category';
    children: MenuItem[];
    isExpanded?: boolean;
}
interface MenuBuilderProps {
    initialItems?: MenuItem[];
}
interface initialValues {
    title: string;
    slug: string;
    url: string;
    status: string;
    parent_id: string;
}

export default function Index({ initialItems = [], user }: MenuBuilderProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<initialValues>>({
        title: '',
        slug: '',
        url: '',
        status: '',
        parent_id: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('menus.store'), {
            onFinish: () => reset('title'),
        });
    };
    // function slugify(title: string) {
    //     return title
    //         .toLowerCase()
    //         .trim()
    //         .replace(/[^a-z0-9\s-]/g, '')
    //         .replace(/\s+/g, '-')
    //         .replace(/--+/g, '-')
    //         .replace(/^-+|-+$/g, '');
    // }
    console.log('user', user);
    console.log('data', data);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />
            <section className="px-5 py-5">
                <form className="flex flex-col gap-6" onSubmit={submit}>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                type="title"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="title"
                                value={data.title}
                                onChange={(e) => {
                                    setData('title', e.target.value);
                                    // setData('slug', slugify(e.target.value));
                                }}
                                placeholder="Title"
                            />
                            <InputError message={errors.title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="url">URL</Label>
                            <Input
                                id="url"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="title"
                                value={data.url}
                                onChange={(e) => {
                                    setData('url', e.target.value);
                                    // setData('slug', slugify(e.target.value));
                                }}
                                placeholder="Title"
                            />
                            <InputError message={errors.title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="url">Category</Label>

                            <Select onValueChange={(value) => setData('parent_id', value)} value={data.parent_id}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        {user.map((item) => (
                                            <SelectItem key={item.id} value={String(item.id)}>
                                                {item.title}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="title">Status</Label>
                            <Select onValueChange={(e) => setData('status', e)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select the Status</SelectLabel>
                                        <SelectItem value="1">Active</SelectItem>
                                        <SelectItem value="0">InActive</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Create
                            </Button>

                            <Button
                                className="mt-4 w-full bg-red-500 text-white hover:bg-red-600"
                                tabIndex={4}
                                onClick={() => router.get(route('menus.index'))}
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Cancel
                            </Button>
                        </div>
                    </div>
                </form>
            </section>

            <section className="px-5 py-5"></section>
        </AppLayout>
    );
}
