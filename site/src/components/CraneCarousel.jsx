import { useEffect, useState } from "react";
import mobileCrane from "../assets/cranes/crane2.png";
import bridgeCrane from "../assets/cranes/crane3.png";
import gantryCrane from "../assets/cranes/crane1.png";

const IMAGES = [gantryCrane, mobileCrane, bridgeCrane];
const CYCLE_MS = 4000;

const SLOTS = {
  main: { x: 0, y: 0, scale: 1, z: 3, opacity: 1 },
  backL: { x: -42, y: -20, scale: 0.48, z: 2, opacity: 0.55 },
  backR: { x: 40, y: 24, scale: 0.48, z: 1, opacity: 0.55 },
};

export default function CraneCarousel({ size = 420 }) {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const id = setInterval(() => {
      setOrder((o) => [o[1], o[2], o[0]]);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const roleOf = (imgIndex) => {
    const pos = order.indexOf(imgIndex);
    return pos === 0 ? "main" : pos === 1 ? "backL" : "backR";
  };

  return (
    <div 
      style={{ 
        position: "relative", 
        width: size, 
        height: size * 0.75,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {IMAGES.map((src, i) => {
        const role = roleOf(i);
        const s = SLOTS[role];
        return (
          <img
            key={src}
            src={src}
            alt="ITALYCRANE"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter:
                role === "main"
                  ? "drop-shadow(0 20px 34px rgba(0,0,0,0.55))"
                  : "drop-shadow(0 10px 18px rgba(0,0,0,0.45)) brightness(0.7)",
              zIndex: s.z,
              opacity: s.opacity,
              transform: `translate(${s.x}%, ${s.y}%) scale(${s.scale})`,
              transition:
                "transform 1.8s cubic-bezier(.4,0,.2,1), opacity 1.8s ease, filter 1.8s ease",
            }}
          />
        );
      })}
    </div>
  );
}
