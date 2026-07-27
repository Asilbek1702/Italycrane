import blueprint from "../assets/cranes/blueprint.png";

export default function CraneBlueprint() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={blueprint}
        alt=""
        style={{
          position: "absolute",

          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",

          width: "90vw",
          height: "90vh",
          objectFit: "contain",

          opacity: 0.45,

          maskImage:
            "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
      />
    </div>
  );
}