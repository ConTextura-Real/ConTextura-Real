"use client";

import { useEffect, useRef } from "react";

let sharedObserver;

function getSharedObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-visible");
        sharedObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }

  return sharedObserver;
}

export default function Reveal({ as: Element = "div", className = "", style, children, ...props }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) return;

    let fallbackTimer;
    let observing = false;

    try {
      getSharedObserver().observe(element);
      observing = true;
      element.classList.add("reveal-observing");
      fallbackTimer = window.setTimeout(() => {
        element.classList.add("reveal-visible");
        sharedObserver?.unobserve(element);
      }, 1800);
    } catch {
      element.classList.add("reveal-visible");
      if (observing) sharedObserver?.unobserve(element);
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      sharedObserver?.unobserve(element);
    };
  }, []);

  return (
    <Element ref={elementRef} className={`reveal ${className}`.trim()} style={style} {...props}>
      {children}
    </Element>
  );
}
