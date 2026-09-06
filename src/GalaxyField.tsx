import { useEffect, useRef } from 'react';

type Dot = {
  angle: number;
  orbit: number;
  size: number;
  hue: number;
  alpha: number;
  speed: number;
  wobble: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const rand = (seed: number) => Math.abs(Math.sin(seed * 12.9898) * 43758.5453) % 1;

const dots: Dot[] = Array.from({ length: 96 }, (_, index) => ({
  angle: rand(index + 1) * Math.PI * 2,
  orbit: 30 + rand(index + 9) * 420,
  size: 1.2 + rand(index + 17) * 4.8,
  hue: [176, 158, 201, 43][index % 4],
  alpha: 0.28 + rand(index + 25) * 0.58,
  speed: 0.12 + rand(index + 33) * 0.34,
  wobble: 12 + rand(index + 41) * 60,
}));

function glow(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, alpha: number) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
  gradient.addColorStop(0, color.replace('ALPHA', String(alpha)));
  gradient.addColorStop(0.38, color.replace('ALPHA', String(alpha * 0.34)));
  gradient.addColorStop(1, color.replace('ALPHA', '0'));
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

export default function GalaxyField({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const setScroll = () => {
      scrollRef.current = clamp(window.scrollY / Math.max(window.innerHeight, 1), 0, 1);
    };

    const setPointer = (event: PointerEvent) => {
      pointerRef.current.tx = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      pointerRef.current.ty = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    };

    const draw = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const t = reducedMotion ? 8 : time * 0.001;
      const scroll = scrollRef.current;
      const pointer = pointerRef.current;

      if (!reducedMotion) {
        pointer.x += (pointer.tx - pointer.x) * 0.055;
        pointer.y += (pointer.ty - pointer.y) * 0.055;
      }

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, width, height);
      const base = ctx.createLinearGradient(0, 0, 0, height);
      base.addColorStop(0, '#07100c');
      base.addColorStop(0.52, '#0b1510');
      base.addColorStop(1, '#07100c');
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      const fade = clamp(1 - scroll * 0.74, 0.2, 1);
      const drift = Math.min(width, height) * 0.1;
      const cx = width * 0.52 + pointer.x * drift;
      const cy = height * 0.38 + pointer.y * drift * 0.72 - scroll * height * 0.12;
      const spread = 1 + scroll * 1.45;

      ctx.save();
      ctx.globalAlpha = fade;
      ctx.globalCompositeOperation = 'lighter';
      ctx.translate(cx, cy);
      ctx.rotate(pointer.x * 0.08 + Math.sin(t * 0.25) * 0.04);
      ctx.scale(spread, 0.7 + scroll * 0.78);

      glow(ctx, -150, -30, 340, 'rgba(0, 255, 255, ALPHA)', 0.42);
      glow(ctx, 80, 18, 390, 'rgba(155, 231, 196, ALPHA)', 0.35);
      glow(ctx, 220, -72, 280, 'rgba(172, 130, 255, ALPHA)', 0.18);
      glow(ctx, -20, 70, 500, 'rgba(255, 211, 122, ALPHA)', 0.12);

      for (const dot of dots) {
        const angle = dot.angle + t * dot.speed * (reducedMotion ? 0 : 0.12);
        const scatter = 1 + scroll * 2.2;
        const x = Math.cos(angle) * dot.orbit * scatter + Math.sin(t * dot.speed + dot.angle) * dot.wobble;
        const y = Math.sin(angle * 0.72) * dot.orbit * 0.42 * scatter + Math.cos(t * dot.speed + dot.angle) * dot.wobble * 0.42;
        const pulse = 0.75 + Math.sin(t * (1.2 + dot.speed) + dot.angle) * 0.25;
        const radius = dot.size * pulse * (1 + scroll * 0.9);

        ctx.fillStyle = `hsla(${dot.hue}, 100%, 72%, ${dot.alpha * fade})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      if (!reducedMotion) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    resize();
    setScroll();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', setScroll, { passive: true });
    window.addEventListener('pointermove', setPointer, { passive: true });
    draw(0);

    if (!reducedMotion) {
      frameRef.current = requestAnimationFrame(draw);
    }

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', setScroll);
      window.removeEventListener('pointermove', setPointer);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="galaxy-canvas" aria-hidden="true" />;
}
