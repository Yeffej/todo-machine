import { useEffect, useRef, useCallback } from 'react';


/**
 * Custom hook to manage animation frames.
 *
 * This hook executes the provided callback function on each animation frame.
 * It maintains a clock using the `performance` API to track the start time,
 * current time, elapsed time, and delta time between frames.
 *
 * @param {function} callback - The function to be executed on each animation frame.
 *                              It receives an object containing the clock's state:
 *                              { start, time, elapsedTime, deltaTime }.
 */
const useAnimationFrame = (callback) => {
    const clock = useRef({
        start: performance.now(),
        time: performance.now(),
        elapsedTime: 0,
        deltaTime: 0.016
    });

    const loop = useCallback(() => {
        const current = performance.now();
        clock.current.elapsedTime = (current - clock.current.start) / 1000;
        clock.current.deltaTime = Math.min(100, (current - clock.current.time)) / 1000;
        clock.current.time = current;

        callback({ ...clock.current });
        requestAnimationFrame(loop);
    }, [callback]);

    useEffect(() => {
        const id = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(id);
    }, [loop]);
};

export default useAnimationFrame;
