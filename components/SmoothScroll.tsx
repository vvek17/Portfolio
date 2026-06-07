// components/SmoothScroll.tsx
'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Scroll to top immediately on mount
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);

        // Detect if device is mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // Only apply Lenis on desktop
        if (isMobile) {
            return; // Use native scroll on mobile
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Scroll to top with Lenis
        lenis.scrollTo(0, { immediate: true });

        // Stop Lenis initially
        lenis.stop();

        // Start Lenis after 2 seconds
        const timer = setTimeout(() => {
            lenis.start();
        }, 2000);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            clearTimeout(timer);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}