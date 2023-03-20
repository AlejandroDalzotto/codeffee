"use client";

import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ImagePlaceholder({ src, alt }: { src: string, alt: string }) {
    const [isLoading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false)
    }

    return (
        <Image
            width={180}
            height={180}
            src={src}
            className={cn(
                'duration-700 ease-in-out',
                isLoading
                    ? 'grayscale blur-md scale-110'
                    : 'grayscale-0 blur-0 scale-100'
            )}
            alt={alt}
            onLoadingComplete={handleLoad}
        />
    );
}