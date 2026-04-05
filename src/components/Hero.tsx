"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: { x: number; y: number; r: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0) s.speed = -s.speed;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,200,255,${Math.abs(s.alpha)})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      {/* Gradient mesh background */}
      <div className="hero-gradient" />

      <div className="hero-content">
        <h1 className="hero-name">Aditya Raj</h1>
        <p className="hero-subtitle">B.Tech AI &amp; ML&nbsp;&nbsp;|&nbsp;&nbsp;Student Intern</p>

        <div className="hero-contact">
          <a href="tel:+918116501555" className="contact-item" aria-label="Phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72c.127 1.002.354 1.988.68 2.94a2 2 0 01-.45 2.11L6.91 8.49a16 16 0 006.6 6.6l1.72-1.72a2 2 0 012.11-.45c.952.326 1.938.553 2.94.68A2 2 0 0122 16.92z"/></svg>
            <span>+91 81165 01555</span>
          </a>
          <a href="mailto:Adityarai78689@gmail.com" className="contact-item" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
            <span>Adityarai78689@gmail.com</span>
          </a>
          <span className="contact-item" aria-label="Location">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Asansol, West Bengal</span>
          </span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-item contact-linkedin" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
