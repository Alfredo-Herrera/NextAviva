import { Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

type TimerPhotoProp = {
    show: boolean;
    decrease?: boolean;
    delay?: number;
    timeWarning?: number;
    timeDanger?: number;
    initTimer?: number;
    fontColorStart?: string;
    fontSize?: number;
    stopTime?: () => void;
};

export const TimerPhoto = ({
    show,
    decrease,
    fontColorStart,
    delay,
    initTimer,
    fontSize,
    stopTime,
}: TimerPhotoProp) => {
    const [time, setTime] = useState<number>(initTimer || 0);
    const timerRef = useRef<NodeJS.Timer | null>(null);

    useEffect(() => {
        if (show) {
            timerRef.current = setInterval(() => {
                const newTimer = decrease ? time - 1 : time + 1;
                if (newTimer === -1) {
                    if (timerRef?.current) {
                        clearInterval(timerRef?.current);
                    }

                    if (stopTime) {
                        stopTime();
                    }
                    return;
                }

                setTime(() => newTimer);
            }, delay || 1000);
        }

        return () => {
            if (timerRef?.current) {
                clearInterval(timerRef?.current);
            }
        };
    }, [time, show]);

    return (
        <Stack
            sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {(show && (
                <Typography
                    fontSize={`${fontSize || '30'}px`}
                    sx={{
                        fontFamily: 'Orbitron, sans-serif;',
                        color: `${fontColorStart || 'black'}`,
                        textShadow:
                            '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;',
                    }}
                >
                    {('0' + Math.floor(time % 60)).slice(-2)}
                </Typography>
            )) || <></>}
        </Stack>
    );
};
