"use client";
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocity: { x: number; y: number };
  life: number;
  maxLife: number;
  rotation: number;
  rotationSpeed: number;
}

export function MagicCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      willReadFrequently: false,
    });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      const now = Date.now();
      if (now - lastTimeRef.current < 12) return;
      lastTimeRef.current = now;

      if (starsRef.current.length > 60) return;

      mouseRef.current = { x: e.clientX, y: e.clientY };

      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.3;
        const spread = 15;

        starsRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * spread,
          y: e.clientY + (Math.random() - 0.5) * spread,
          size: Math.random() * 2.5 + 1.5,
          opacity: 1,
          velocity: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed - 0.6,
          },
          life: 0,
          maxLife: Math.random() * 6 + 12,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.15,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const radius = i % 2 === 0 ? size : size / 2;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Batch rendering by opacity levels for better performance
      const visibleStars: Star[] = [];

      starsRef.current = starsRef.current.filter((star) => {
        star.life++;
        star.x += star.velocity.x;
        star.y += star.velocity.y;
        star.velocity.y += 0.02;
        star.rotation += star.rotationSpeed;
        star.opacity = Math.pow(1 - star.life / star.maxLife, 2);

        if (star.life >= star.maxLife || star.opacity < 0.01) {
          return false;
        }

        visibleStars.push(star);
        return true;
      });

      // Render in batches: glows first, then stars
      visibleStars.forEach((star) => {
        // Skip expensive gradients for very faint stars
        if (star.opacity > 0.15) {
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size * 4
          );
          gradient.addColorStop(
            0,
            `rgba(120, 210, 255, ${star.opacity * 0.9})`
          );
          gradient.addColorStop(
            0.4,
            `rgba(80, 180, 255, ${star.opacity * 0.5})`
          );
          gradient.addColorStop(1, `rgba(40, 120, 255, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw all stars in one batch
      visibleStars.forEach((star) => {
        ctx.fillStyle = `rgba(200, 230, 255, ${star.opacity})`;
        drawStar(ctx, star.x, star.y, star.size, star.rotation);
      });

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
