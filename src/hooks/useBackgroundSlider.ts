import { useEffect, useRef, useState } from 'react';

/**
 * Reusable background slider hook.
 * - Advances index on an interval
 * - Pauses when length <= 1
 * - Cleans up timers on unmount
 */
export function useBackgroundSlider(length: number, intervalMs: number = 15000) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!length || length <= 1) {
      return;
    }

    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [length, intervalMs]);

  return { current, setCurrent } as const;
}
