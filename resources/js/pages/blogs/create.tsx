import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import FileUpload from '@/components/file-upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { handleImageValidation } from '@/utils/function';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { router } from '@inertiajs/react';
import { Bold, ClassicEditor, Essentials, Italic, Paragraph, Table, TableLayout, TableProperties, TableToolbar } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
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
    description: string;
    image: File | null;
    image_alt: string;
    meta_title: string;
    meta_description: string;
    is_active: string;
}

export default function Index({ initialItems = [], user }: MenuBuilderProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<initialValues>>({
        title: '',
        slug: '',
        description: '',
        image: null,
        image_alt: '',
        meta_title: '',
        meta_description: '',
        is_active: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('blogs.store'), {
            onFinish: () => reset('title'),
        });
    };
    function slugify(title: string) {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    console.log('user', user);
    console.log('data', data);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target || {};
        if (!files) return;
        if (files.length > 0) {
            const validation = handleImageValidation(files[0]);
            if (!validation) return;

            setData('image', files[0]);
        }
    };

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
                                    setData('slug', slugify(e.target.value));
                                }}
                                placeholder="Title"
                            />
                            <InputError message={errors.title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="slug">Slug</Label>
                            <Input id="slug" type="text" required autoFocus tabIndex={1} autoComplete="title" value={data.slug} placeholder="Title" />
                            <InputError message={errors.slug} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>

                            <CKEditor
                                editor={ClassicEditor}
                                config={{
                                    licenseKey: 'GPL', // Or 'GPL'.
                                    plugins: [Essentials, Paragraph, Bold, Italic, Table, TableLayout, TableProperties, TableToolbar],
                                    toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'insertTable', 'insertTableLayout'],
                                    table: {
                                        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties'],
                                    },
                                    initialData: '<p>Hello from CKEditor 5 in React!</p>',
                                }}
                                data={data.description}
                                onReady={(editor: ClassicEditor) => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor 2 is ready to use!', editor);
                                }}
                                onChange={(event, editor: ClassicEditor) => {
                                    console.log('event', event);
                                    const data = editor.getData();
                                    console.log('Change: ', data);
                                    setData((prev) => ({
                                        ...prev,
                                        description: data,
                                    }));
                                }}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FileUpload
                                name="image"
                                imageName={data.image}
                                //   fileName={data.panAttachmentPathFileName}
                                error=""
                                handleFileUpload={(e) => handleImageUpload(e)}
                                title="Image"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="image_alt">Image Alt</Label>
                            <Input
                                id="image_alt"
                                type="image_alt"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="image_alt"
                                value={data.image_alt}
                                onChange={(e) => {
                                    setData('image_alt', e.target.value);
                                }}
                                placeholder="Image Alt"
                            />
                            <InputError message={errors.image_alt} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="meta_title">Meta Title</Label>
                            <Input
                                id="meta_title"
                                type="meta_title"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="meta_title"
                                value={data.meta_title}
                                onChange={(e) => {
                                    setData('meta_title', e.target.value);
                                }}
                                placeholder="Meta Title"
                            />
                            <InputError message={errors.image_alt} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="remarks">Meta Description</Label>
                            <Textarea
                                className="mt-1 block min-h-[150px] w-full border p-2"
                                name="Remarks"
                                value={data.meta_description}
                                onChange={(e) => {
                                    setData('meta_description', e.target.value);
                                }}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="title">Status</Label>
                            <Select onValueChange={(e) => setData('is_active', e)}>
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
