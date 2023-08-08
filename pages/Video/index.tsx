import { useEffect, useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VideoZipper from '../../src/videoZipper/video-zipper';

const VideoUploader = () => {
    const videoRef = useRef(null);
    const [fileSelect, setFileSelect] = useState<File>();
    const [percentage, setPercentage] = useState(0);

    const hasSpecialCharacters = (inputString: string) => {
        const specialCharacterPattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,<>/?]+/;
        return specialCharacterPattern.test(inputString);
    };
    useEffect(() => {
        let compressor = new VideoZipper({
            quality: 'low',
        });
        compressor.load().then(() => {
            console.log('loaded');
        });
        let downloadElement = document.getElementById('download');
        let preview = document.getElementById('preview') as HTMLVideoElement;
        const files = document!.getElementById('file') as HTMLInputElement;

        files!.addEventListener('input', (e) => {
            let files = (e.target as HTMLInputElement).files;

            let file = files![0];
            if (hasSpecialCharacters(file.name)) {
                alert('Video con nombre no valido, renombre el archivo');
            } else {
                setFileSelect(file);

                compressor.start(() => {
                    downloadElement!.style.display = 'none';
                    preview!.style.display = 'none';
                });

                compressor.progress((percent: number) => {
                    setPercentage(percent);
                });

                compressor.compress(file).then(($this) => {
                    preview!.src = compressor.getUrl();
                    preview!.play();
                    preview!.style.display = 'block';
                    downloadElement!.style.display = 'block';
                });

                compressor.fail((error: any) => {
                    console.log(
                        '🚀 ~ file: index.tsx:44 ~ compressor.fail ~ error:',
                        error
                    );
                });
            }
        });

        downloadElement!.addEventListener('click', () => {
            compressor.download();
        });
    }, []);

    useEffect(() => {}, [fileSelect]);

    return (
        <div>
            <input
                id="file"
                name="file"
                type="file"
                accept="video/*"
                ref={videoRef}
            />

            <div id="loading" className="blur-loading">
                <div className="spinner"></div>
            </div>

            {percentage !== 0 && percentage !== 100 && (
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                    />
                </div>
            )}

            <div className="container">
                <video id="preview" controls></video>

                <button id="download" className="btn">
                    Download Video
                </button>
            </div>
        </div>
    );
};

export default VideoUploader;
