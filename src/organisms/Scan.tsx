import { FC, useEffect, useRef, useState } from 'react';

const images = [
    { src: '/illustrations/paper-high.png' },
    { src: '/illustrations/paper-2.png' },
];

type props = {
    jscam: boolean;
};

declare global {
    interface Window {
        jscanify: any;
    }
}
export const Scanner: FC<props> = ({ jscam }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [loadedOpenCV, setLoadedOpenCV] = useState(false);
    const [selectedImage, setSelectedImage] = useState<any>(undefined);

    useEffect(() => {
        // eslint-disable-next-line no-undef
        if (jscam) {
            setLoadedOpenCV(true);
            const jscanify = window.jscanify;
            const scanner = new jscanify();
            if (selectedImage) {
                containerRef!.current!.innerHTML = '';
                const newImg = document.createElement('img');
                newImg.src = selectedImage.src;

                newImg.onload = function () {
                    const resultCanvas = scanner.extractPaper(newImg, 386, 500);
                    containerRef!.current!.append(resultCanvas);

                    const highlightedCanvas = scanner.highlightPaper(newImg);
                    containerRef.current!.append(highlightedCanvas);
                };
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImage]);

    return (
        <>
            <div className="scanner-container">
                <div>
                    {!loadedOpenCV && (
                        <div>
                            <h2>Loading OpenCV...</h2>
                        </div>
                    )}
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={
                                selectedImage && selectedImage.src === image.src
                                    ? 'selected'
                                    : ''
                            }
                            src={image.src}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
                <div ref={containerRef} id="result-container"></div>
            </div>
        </>
    );
};
