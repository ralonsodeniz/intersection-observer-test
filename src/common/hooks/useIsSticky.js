import { useEffect, useState, useRef } from "react";

export const useIsSticky = () => {
    const [isSticky, setIsSticky] = useState(false);
    const sentinelRef = useRef(null);
    useEffect(() => {
        const intersectionOptions = {
            threshold: [0],
        };
        const onIntersection = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };
        const intersectionObserver = new IntersectionObserver(
            onIntersection,
            intersectionOptions
        );
        sentinelRef.current && intersectionObserver.observe(sentinelRef.current);
        return () => intersectionObserver.disconnect();
    }, [sentinelRef]);

    return {isSticky, sentinelRef}
}
