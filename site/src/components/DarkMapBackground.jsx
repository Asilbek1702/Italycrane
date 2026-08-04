const MAP_EMBED_SRC = "https://maps.google.com/maps?q=Italycrane,%20Tashkent&t=&z=14&ie=UTF8&iwloc=&output=embed";

export default function DarkMapBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden" }}>
      <iframe
        title="dark-map-bg"
        src={MAP_EMBED_SRC}
        style={{
          width: "110%", height: "110%", border: 0,
          filter: "invert(92%) grayscale(60%) brightness(0.85) contrast(1.1) hue-rotate(180deg)"
        }}
        loading="lazy"
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(6,7,9,0.55)" }} />
      {/* Пин офиса */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-100%)",
        width: 18, height: 18, borderRadius: "50% 50% 50% 0", background: "#f0b429",
        boxShadow: "0 0 18px 4px rgba(240,180,41,0.7)", rotate: "-45deg"
      }} />
    </div>
  );
}