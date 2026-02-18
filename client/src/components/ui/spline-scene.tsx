'use client';

import { Suspense, lazy, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
    /** URL to the Spline scene (.splinecode file) */
    scene: string;
    /** CSS class to apply to the Spline canvas */
    className?: string;
    /** Callback fired when the scene finishes loading */
    onLoad?: (app: any) => void;
}

/**
 * A lazy-loaded Spline 3D scene component with loading spinner.
 * The parent container MUST have explicit width and height.
 */
export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = (app: any) => {
        setLoaded(true);
        onLoad?.(app);
    };

    return (
        <Suspense
            fallback={
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                    }}
                >
                    <LoadingSpinner />
                </div>
            }
        >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {!loaded && (
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0, 0, 0, 0.3)',
                            borderRadius: '1rem',
                            zIndex: 10,
                        }}
                    >
                        <LoadingSpinner />
                    </div>
                )}
                <Spline
                    scene={scene}
                    className={className}
                    onLoad={handleLoad}
                    style={{
                        opacity: loaded ? 1 : 0,
                        transition: 'opacity 0.6s ease-in-out',
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
        </Suspense>
    );
}

/** Simple CSS spinner — no dependencies */
function LoadingSpinner() {
    return (
        <span
            style={{
                width: 40,
                height: 40,
                border: '3px solid rgba(255, 255, 255, 0.2)',
                borderTopColor: '#818cf8',
                borderRadius: '50%',
                animation: 'spline-spin 0.8s linear infinite',
            }}
        />
    );
}

/**
 * Inject the spinner keyframes into the document.
 * This runs once on module load — no side effects on re-render.
 */
if (typeof document !== 'undefined') {
    const styleId = 'spline-scene-styles';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
      @keyframes spline-spin {
        to { transform: rotate(360deg); }
      }
    `;
        document.head.appendChild(style);
    }
}
