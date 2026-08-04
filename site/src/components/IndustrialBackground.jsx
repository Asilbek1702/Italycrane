// Требуется фото: src/assets/about-bg.jpg (цех, мостовой кран, сварка)
import bgPhoto from "../assets/about-bg.jpg";

export default function IndustrialBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden" }}>
      <img src={bgPhoto} alt="" style={{
        width: "100%", height: "100%", objectFit: "cover",
        filter: "blur(2px) grayscale(20%)"
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(10,12,14,0.88) 0%, rgba(10,12,14,0.92) 100%)"
      }} />
    </div>
  );
}