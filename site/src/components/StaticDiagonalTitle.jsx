export default function StaticDiagonalTitle({ text = "ITALYCRANE" }) {
  return (
    <h1 style={{
      margin: 0,
      textAlign: "left",
      fontFamily: "'Oswald', sans-serif",
      fontWeight: 800,
      textTransform: "uppercase",
      fontSize: "clamp(2.2rem, 9vw, 6.5rem)",
      letterSpacing: "0.02em",
      lineHeight: 1,
      backgroundImage: "linear-gradient(115deg, #ffffff 0%, #ffffff 48%, #f5b942 52%, #f5b942 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      filter: "drop-shadow(0 0 18px rgba(245,185,66,0.25))"
    }}>
      {text}
    </h1>
  );
}