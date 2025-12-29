import React, { useEffect, useState } from "react";
import dfaCert from '@/assets/images/dfa-cert.png'
import mttCert from'@/assets/images/3mtt-cert.png'

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

    const containerStyle: React.CSSProperties = {
        width,
        height,
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        background: "#f3f3f3",
    };

    const imgStyle: React.CSSProperties = {
        width: "100%",
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
            <img src={images[index]} alt={`slide-${index + 1}`} style={imgStyle} />
            <button
                onClick={prev}
                aria-label="Previous"
                style={{ ...btnStyle, left: 8 }}
            >
                ‹
            </button>
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