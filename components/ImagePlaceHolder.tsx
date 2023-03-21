import useImageLoader from '@/hooks/useImageLoader';
import Image from 'next/image';
import Loader from './Loader';

export default function ImagePlaceholder({ src, alt, width, height }: { src: string, alt: string, width: number, height: number }) {

    const { loading, handleLoadingComplete } = useImageLoader(src);

    return (
        <div className="relative w-48 h-48">
            {loading && (<Loader />)}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                onLoadingComplete={handleLoadingComplete}
            />

        </div>
    );
}