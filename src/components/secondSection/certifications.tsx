import React, { useEffect, useState } from "react";
import dfaCert from '@/assets/images/dfa-cert.png'
import mttCert from '@/assets/images/3mtt-cert.png'

type Props = {
    images?: string[];
    interval?: number; // ms
    width?: string | number;
    height?: string | number;
};

const Certifications: React.FC<Props> = ({
    images = [
        dfaCert, mttCert
    ],
    interval = 3000,
    width = "100%",
    height = 300,
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, interval);
        return () => clearInterval(id);
    }, [images, interval]);

    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setIndex((i) => (i + 1) % images.length);

    const overlayRef = React.useRef<HTMLDivElement | null>(null);

    const openModal = (src: string) => {
        if (overlayRef.current) return;
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.left = '0';
        overlay.style.top = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.8)';

        // allow clicks on the image itself to close the modal by listening in the capture phase
        overlay.addEventListener('click', (e: MouseEvent) => {
            const tgt = e.target as HTMLElement | null;
            if (!tgt) return;
            if (tgt === overlay || tgt.tagName === 'IMG') {
                if (overlayRef.current) {
                    overlayRef.current.remove();
                    overlayRef.current = null;
                    document.body.style.overflow = '';
                }
            }
        }, { capture: true });
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '10000';
        overlay.style.cursor = 'zoom-out';

        const imgEl = document.createElement('img');
        imgEl.src = src;
        imgEl.style.maxWidth = '95%';
        imgEl.style.maxHeight = '95%';
        imgEl.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
        imgEl.style.borderRadius = '6px';
        // clicking the image itself shouldn't close the modal
        imgEl.addEventListener('click', (e) => e.stopPropagation());

        overlay.addEventListener('click', () => {
            if (overlayRef.current) {
                overlayRef.current.remove();
                overlayRef.current = null;
                document.body.style.overflow = '';
            }
        });

        overlay.appendChild(imgEl);
        document.body.appendChild(overlay);
        overlayRef.current = overlay;
        document.body.style.overflow = 'hidden';
    };

    useEffect(() => {
        return () => {
            if (overlayRef.current) {
                overlayRef.current.remove();
                overlayRef.current = null;
                document.body.style.overflow = '';
            }
        };
    }, []);

    const containerStyle: React.CSSProperties = {
        width,
        height,
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        background: "#f3f3f3",
    };

    const imgStyle: React.CSSProperties = {
        width: "100vw",
        height: "100%",
        objectFit: "cover",
        display: "block",
    };

    const btnStyle: React.CSSProperties = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(0,0,0,0.5)",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        cursor: "pointer",
        borderRadius: 4,
    };

    return (
        <div style={containerStyle} title="simple image slider">
            <img
                src={images[index]}
                alt={`slide-${index + 1}`}
                style={{ ...imgStyle, cursor: "zoom-in" }}
                onClick={() => openModal(images[index])}
            />
            <button
                onClick={prev}
                aria-label="Previous"
                style={{ ...btnStyle, left: 8 }}
            >
                ‹
            </button>
            {/* <button
                onClick={() => {
                    if (overlayRef.current) {
                        overlayRef.current.remove();
                        overlayRef.current = null;
                        document.body.style.overflow = '';
                    }
                }}
                aria-label="Close modal"
                style={{ ...btnStyle, top: 8, right: 8, transform: 'none' }}
            >
                ✕
            </button> */}
            <button
                onClick={next}
                aria-label="Next"
                style={{ ...btnStyle, right: 8 }}
            >
                ›
            </button>
        </div>
    );
};

export default Certifications;