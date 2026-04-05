"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Overlay } from "./Overlay";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    for (let i = 0; i <= 59; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(2, '0');
        img.src = `/sequence/frame_${frameIndex}_delay-0.067s.webp`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === 60) {
                loadedImages.sort((a, b) => {
                    const matchA = a.src.match(/frame_(\d+)/);
                    const matchB = b.src.match(/frame_(\d+)/);
                    const idxA = matchA ? parseInt(matchA[1], 10) : 0;
                    const idxB = matchB ? parseInt(matchB[1], 10) : 0;
                    return idxA - idxB;
                });
                setImages(loadedImages);
                setImagesLoaded(true);
            }
        };
        loadedImages.push(img);
    }
  }, []);
  
  useEffect(() => {
      if (imagesLoaded && images.length > 0) {
          drawOnCanvas(images[0]);
      }
  }, [imagesLoaded, images]);

  const drawOnCanvas = (img: HTMLImageElement) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
    } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (!imagesLoaded || images.length === 0) return;
      
      const frameIndex = Math.min(
          59,
          Math.max(0, Math.floor(latest * 59))
      );
      
      requestAnimationFrame(() => {
          drawOnCanvas(images[frameIndex]);
      });
  });

  useEffect(() => {
      const handleResize = () => {
          if (canvasRef.current) {
              canvasRef.current.width = window.innerWidth;
              canvasRef.current.height = window.innerHeight;
              if (imagesLoaded && images.length > 0) {
                 const latest = scrollYProgress.get();
                 const frameIndex = Math.min(59, Math.max(0, Math.floor(latest * 59)));
                 drawOnCanvas(images[frameIndex]);
              }
          }
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [imagesLoaded, images, scrollYProgress]);

  return (
    <section ref={containerRef} className="h-[500vh] relative bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
