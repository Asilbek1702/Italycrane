export default function AmbientGlow() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
      <div style={{
        position: "absolute", top: "-10%", left: "-10%", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(240,180,41,0.16) 0%, rgba(240,180,41,0) 70%)",
        filter: "blur(60px)"
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", right: "-10%", width: 700, height: 700,
        background: "radial-gradient(circle, rgba(255,140,20,0.12) 0%, rgba(255,140,20,0) 70%)",
        filter: "blur(80px)"
      }} />
    </div>
  );
}