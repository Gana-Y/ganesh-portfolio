'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  color: string;
  hasHalo: boolean;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Smooth Mouse Parallax with Linear Interpolation (Lerp)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.025;
      targetMouseY = (e.clientY - height / 2) * 0.025;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Generate Stars (Balanced density for 60-120fps efficiency)
    const starCount = Math.min(300, Math.floor((width * height) / 4500));
    const starColors = ['#f0f6fc', '#e0f2fe', '#bae6fd', '#38bdf8', '#00d4ff', '#818cf8'];
    const stars: Star[] = Array.from({ length: starCount }, () => {
      const size = Math.random() * 1.5 + 0.4;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        size,
        opacity: Math.random() * 0.75 + 0.25,
        twinkleSpeed: Math.random() * 0.02 + 0.006,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        hasHalo: size > 1.2,
      };
    });

    let time = 0;
    const render = () => {
      time += 1;
      
      // Interpolate mouse smoothly
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw each star with GPU-friendly paths (no CPU shadowBlur penalties)
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.35 + 0.65;
        const currentOpacity = star.opacity * twinkle;

        const renderX = star.x - currentMouseX * star.z;
        const renderY = star.y - currentMouseY * star.z;

        // Wrap around viewport edges smoothly
        const wrappedX = ((renderX % width) + width) % width;
        const wrappedY = ((renderY % height) + height) % height;

        // Fast GPU Halo for larger stars without expensive shadowBlur
        if (star.hasHalo) {
          ctx.beginPath();
          ctx.arc(wrappedX, wrappedY, star.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = currentOpacity * 0.2;
          ctx.fill();
        }

        // Crisp Inner Core
        ctx.beginPath();
        ctx.arc(wrappedX, wrappedY, star.size * (0.8 + twinkle * 0.2), 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentOpacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Deep Space Background Radial Vignette (CSS rendered on GPU compositor) */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(7, 15, 36, 0.4) 0%, rgba(3, 7, 18, 0.75) 60%, rgba(2, 2, 5, 0.98) 100%)',
        }}
      />
      
      {/* High-Performance Canvas Star Layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 will-change-transform"
        style={{ opacity: 0.95 }}
      />
    </>
  );
}
