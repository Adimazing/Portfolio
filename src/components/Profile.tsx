"use client";
import { useEffect, useRef } from "react";

export default function Profile() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const fullText =
    "I am Aditya Raj Rai, a 3rd-year B.Tech CSE (AI & ML) student at Asansol Engineering College. I possess strong technical skills in web development, AI, and ML, and am passionate about creating intelligent, user-centric solutions that drive real-world impact. I am actively pursuing internship and project opportunities to apply my knowledge, collaborate with industry professionals, and contribute meaningfully to innovative technology initiatives.";

  useEffect(() => {
    const section = sectionRef.current;
    const textEl = textRef.current;
    if (!section || !textEl) return;

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          textEl.textContent = "";
          let i = 0;
          const interval = setInterval(() => {
            textEl.textContent = fullText.slice(0, i + 1);
            i++;
            if (i >= fullText.length) clearInterval(interval);
          }, 18);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="split-section" id="profile">
      <div className="split-content split-left fade-in-section">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-title">Who I Am</h2>
        <p ref={textRef} className="typewriter-text">
          {fullText}
        </p>
      </div>

      <div className="split-deco split-deco-right">
        <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className="deco-avatar">
          {/* Abstract code-themed decoration */}
          <defs>
            <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F8EF7" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#00D4AA" stopOpacity="0.3"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          {/* Person silhouette */}
          <circle cx="200" cy="130" r="70" fill="url(#avatarGrad)" opacity="0.5"/>
          <path d="M100 400 Q100 280 200 280 Q300 280 300 400 Z" fill="url(#avatarGrad)" opacity="0.4"/>
          {/* Code lines decoration */}
          <rect x="50" y="430" width="80" height="6" rx="3" fill="#4F8EF7" opacity="0.7"/>
          <rect x="50" y="446" width="120" height="6" rx="3" fill="#00D4AA" opacity="0.5"/>
          <rect x="50" y="462" width="60" height="6" rx="3" fill="#4F8EF7" opacity="0.4"/>
          <rect x="240" y="30" width="100" height="6" rx="3" fill="#00D4AA" opacity="0.6"/>
          <rect x="260" y="46" width="70" height="6" rx="3" fill="#4F8EF7" opacity="0.4"/>
          {/* Floating brackets */}
          <text x="30" y="200" fontFamily="monospace" fontSize="72" fill="#4F8EF7" opacity="0.15" filter="url(#glow)">&lt;/&gt;</text>
          <text x="280" y="350" fontFamily="monospace" fontSize="48" fill="#00D4AA" opacity="0.15">{`{}`}</text>
          {/* Orbit circles */}
          <circle cx="200" cy="220" r="120" fill="none" stroke="#4F8EF7" strokeWidth="1" strokeDasharray="6 8" opacity="0.3"/>
          <circle cx="200" cy="220" r="160" fill="none" stroke="#00D4AA" strokeWidth="1" strokeDasharray="3 12" opacity="0.2"/>
        </svg>
      </div>
    </section>
  );
}
