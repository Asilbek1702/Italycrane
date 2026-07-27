import blueprint from "../assets/cranes/blueprint.png";

export default function CraneBlueprint() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 1, // На заднем плане
      }}
    >
      <img
        src={blueprint}
        alt="Blueprint"
        style={{
          position: "absolute",
          left: "50%", // Ровно по центру экрана по горизонтали
          top: "50%",  // Ровно по центру по вертикали
          transform: "translate(-50%, -50%)",
          width: "1050px",
          maxWidth: "85vw",
          opacity: 0.28,
          objectFit: "contain",
        }}
      />
    </div>
  );
}