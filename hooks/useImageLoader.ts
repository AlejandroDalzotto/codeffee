import { useState, useEffect, useCallback } from 'react';

const useImageLoader = (src: string) => {
    const [loading, setLoading] = useState<boolean>(true);

    const handleLoadingComplete = useCallback(() => {
        setLoading(false);
    }, []);

    useEffect(() => {
        setLoading(true);
    }, [src]);

    return { loading, handleLoadingComplete };
};

export default useImageLoader;