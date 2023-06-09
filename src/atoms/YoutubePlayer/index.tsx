/* eslint-disable @typescript-eslint/dot-notation */
import PlayIllustrationVideo from '@/assets/PlayVideo';
import { Button } from '@mui/material';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { snackbar } from '../Snackbar';
import { GridContaineButtonYoutube } from './styles';

type YoutubePlayerProps = {
    idPlayer: string;
    playVideo: () => void;
    setViewButton: Dispatch<SetStateAction<boolean>>;
    setPlayer: any;
    loadingPlayer: Dispatch<SetStateAction<boolean>>;
    onEndVideo?: () => void;
    viewButton: boolean;
    onReady: () => void;
    loop?: boolean;
    autoPlay?: boolean;
};

declare const window: any;

const YoutubePlayer: FC<YoutubePlayerProps> = ({
    idPlayer,
    playVideo,
    setViewButton,
    setPlayer,
    loadingPlayer,
    onEndVideo,
    viewButton,
    onReady,
    loop,
    autoPlay,
}) => {
    console.log('🚀 ~ file: index.tsx:35 ~ viewButton:', viewButton);
    useEffect(() => {
        loadScript('https://www.youtube.com/player_api')
            .then(createPlayer)
            .catch((error) => {
                console.log(error);
            });
    }, [idPlayer]);

    const createPlayer = () => {
        const host = window.location.origin;
        const YT: string = 'YT';
        if (idPlayer) {
            // eslint-disable-next-line @typescript-eslint/dot-notation, react-hooks/exhaustive-deps
            window.YT.ready(function () {
                // eslint-disable-next-line @typescript-eslint/dot-notation, react-hooks/exhaustive-deps
                const player = new window.YT.Player(idPlayer, {
                    videoId: idPlayer,
                    playerVars: {
                        loop,
                        enablejsapi: 1,
                        mute: autoPlay === true ? 0 : 1,
                        title: 0,
                        showinfo: 0,
                        fs: 0,
                        playlist: idPlayer,
                        controls: 0,
                        autoplay: 1,
                        origin: host,
                        cc_load_policy: 1,
                        disablekb: 1,
                        modestbranding: 1,
                        showRelatedVideos: 0,
                        rel: 0,
                    },
                    events: {
                        onReady: onPlayerReady,
                        onStateChange: onPlayerStateChange,
                        onError: onPlayerError,
                    },
                });
                setPlayer(player);
            });
        }
    };

    const onPlayerError = (event: { data: string | number }) => {
        snackbar.error('Se produjo un error desconocido, recarge la pagina');
    };

    const loadScript = (src: string) =>
        new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.src = src;
            let firstScriptTag: HTMLScriptElement =
                document.getElementsByTagName('script')[0];
            firstScriptTag!.parentNode!.insertBefore(script, firstScriptTag);
            script.onload = resolve;
            script.onerror = reject;
        });

    const onPlayerStateChange = (event: {
        data: number;
        target: { isMuted: () => any };
    }) => {
        if (event.data === 0) {
            if (onEndVideo && !event.target.isMuted()) {
                onEndVideo();
            }
            setViewButton(true);
        } else if (event.data === -1 && autoPlay) {
            setViewButton(true);
        }
    };

    const onPlayerReady = (event: {
        target: {
            hideVideoInfo: () => void;
            playVideo: () => void;
            unMute: () => void;
        };
    }) => {
        setTimeout(() => {
            loadingPlayer(true);
            event.target.hideVideoInfo();
            event.target.playVideo();

            if (autoPlay) {
                event.target.unMute();
                setViewButton(false);
            }
            onReady();
        }, 1000);
    };

    return (
        <div className="videowrapper">
            {idPlayer && (
                <div
                    id={idPlayer}
                    style={{
                        width: '100%',
                        height: '100vh',
                        position: 'fixed',
                    }}
                />
            )}
            {viewButton && (
                <GridContaineButtonYoutube>
                    <Button
                        onClick={() => {
                            playVideo();
                        }}
                    >
                        <PlayIllustrationVideo
                            circleFill={'#FDFDFD'}
                            playFill={'red'}
                        />
                    </Button>
                </GridContaineButtonYoutube>
            )}
        </div>
    );
};

export default YoutubePlayer;
