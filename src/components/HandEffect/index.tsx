import { useEffect, useRef } from "react";
import { keyframes } from "@stitches/react";

export const scaleUp = keyframes({
  "0%": { transform: "rotate(-50deg)" },
  "50%": { transform: "rotate(30deg)" },
  //"75%": { transform: "rotate(50deg)" },
  "100%": { transform: "rotate(-50deg)" },
});

export const HandEffect = () => {
  const hand: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setInterval(() => {
          hand.current.style.animation = `${scaleUp} 2s ease-in-out`;
          hand.current.style.animationIterationCount = "infinite"
        }, 500);
      }
    });

    observer.observe(hand.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={hand}
      style={{ display: "inline-flex", transform: "rotate(320deg)" }}
    >
      ✋
    </span>
  );
};
