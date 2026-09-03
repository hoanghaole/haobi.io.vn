import { useEffect, useRef } from 'react';

type LightRaysProps = {
  raysOrigin?: 'top-center';
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
};

export default function LightRays({
  raysColor = '#00ffff',
  raysSpeed = 1.5,
  lightSpread = 0.8,
  rayLength = 1.2,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.1,
  distortion = 0.05,
  className = '',
}: LightRaysProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!followMouse) return;
    const el = ref.current;
    if (!el) return;
    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width - 0.5) * mouseInfluence * 100}%`);
      el.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height - 0.5) * mouseInfluence * 100}%`);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [followMouse, mouseInfluence]);

  return (
    <div
      ref={ref}
      className={`light-rays ${className}`}
      style={{
        '--rays-color': raysColor,
        '--rays-speed': `${4 / raysSpeed}s`,
        '--spread': lightSpread,
        '--ray-length': rayLength,
        '--noise': noiseAmount,
        '--distortion': `${distortion * 100}px`,
      } as React.CSSProperties}
      aria-hidden="true"
    />
  );
}
