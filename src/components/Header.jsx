import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SvgLoader from "./SvgLoader";

// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};

const Header = () => {
  const headerRef = useRef(null);
  const animationRefs = useRef([]);

  useEffect(() => {
    const circles = headerRef.current.querySelectorAll("circle");
    circles.forEach((circle, index) => {
      const number = index + 1;
      const duration = isPrime(number) ? 399 : 400; // Prime circles have duration 399, composite circles have duration 400
      const animation = gsap.to(circle, {
        rotation: 360,
        duration: duration,
        repeat: -1,
        ease: "linear",
        svgOrigin: "400 400",
      });
      animationRefs.current.push(animation);
    });

    const monitorPerformance = () => {
      let lastTime = performance.now();
      let frame = 0;
      const checkPerformance = () => {
        const now = performance.now();
        frame++;
        if (now - lastTime >= 1000) {
          const fps = frame;
          if (fps < 30) {
            animationRefs.current.forEach((animation) => animation.pause());
          } else {
            animationRefs.current.forEach((animation) => animation.resume());
          }
          frame = 0;
          lastTime = now;
        }
        requestAnimationFrame(checkPerformance);
      };
      checkPerformance();
    };

    monitorPerformance();

    return () => {
      animationRefs.current.forEach((animation) => animation.kill());
    };
  }, []);

  return (
    <div
      className="h-screen w-full overflow-hidden relative bg-black flex md:flex-col lg:flex-col"
      ref={headerRef}
    >
      {/* Render the imported SVG component */}
      <SvgLoader className="w-full h-full absolute md:top-0 md:left-0 m-auto z-0 object-cover" />
      <div className="z-10 absolute top-0 w-full h-full flex flex-col justify-center items-center text-center">
        <div className="text-[#48AA80] opacity-90 md:text-[18vw] font-erica-one-regular text-7xl flex">
          SATVIK
        </div>
        <div className="font-jetbrains-mono text-[#48eba4] md:text-2xl lg:text-3xl font-black">
          A front end developer
        </div>
      </div>
    </div>
  );
};

export default Header;
