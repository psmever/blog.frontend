import { useEffect, useLayoutEffect, useState } from 'react';

export default function useDimensions(targetRef: any) {
    const getDimensions = () => {
        return {
            width: targetRef.current ? targetRef.current.offsetWidth : 0,
            height: targetRef.current ? targetRef.current.offsetHeight : 0,
        };
    };

    const [dimensions, setDimensions] = useState(getDimensions);

    const handleResize = () => {
        setDimensions(getDimensions());
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line
    }, []);

    useLayoutEffect(() => {
        handleResize();
        // eslint-disable-next-line
    }, []);

    return dimensions;
}
