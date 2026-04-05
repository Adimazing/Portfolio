"use client";
import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-section, .soft-card, .exp-card, .timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
