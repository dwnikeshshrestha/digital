import { Upload } from 'lucide-react';

interface Upload {
    name: string;
    title: string;
    // fileName: string;
    imageName: File | null;

    error: string | null;
    handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUpload({ name, title, imageName, error, handleFileUpload }: Upload) {
    return (
        <div className="w-full max-w-md rounded-3xl bg-slate-200 p-6 shadow-sm drop-shadow-lg">
            <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-gray-100 p-8">
                {imageName ? (
                    <div className="flex w-full flex-col items-center">
                        <img
                            src={imageName ? URL.createObjectURL(imageName) : ''}
                            alt="Preview"
                            //   className="w-32 h-32 object-cover rounded-lg mb-2"
                            className="mb-2 h-32 w-full rounded-lg object-cover"
                        />
                        {/* <p className="text-lg font-medium">{fileName}</p> */}
                    </div>
                ) : (
                    <>
                        <div className="rounded-full bg-[var(--primary)] p-3">
                            <label htmlFor={name}>
                                <Upload className="h-8 w-8 text-white" />
                            </label>
                        </div>
                        <h2 className="mt-2 text-xl font-medium">Upload Image </h2>
                        <p className="text-sm text-gray-500">Image size must be less than 4MB</p>
                    </>
                )}
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>

            <label
                htmlFor={name}
                className="mt-4 block w-full cursor-pointer rounded-full bg-[var(--primary)] py-1.5 text-center font-medium text-white transition-colors"
            >
                {title}
            </label>

            <input
                type="file"
                id={name}
                // ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
                name={name}
            />
        </div>
    );
}
