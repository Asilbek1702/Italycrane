import blueprint from "../assets/cranes/blueprint.png";

export default function CraneBlueprint() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
      display: "flex", alignItems: "center", justifyContent: "flex-end",
      overflow: "hidden"
    }}>
      <img
        src={blueprint}
        alt=""
        style={{
          height: "115%", width: "auto", maxWidth: "none",
          objectFit: "cover", opacity: 0.5,
          marginRight: "-6%",
          maskImage: "linear-gradient(90deg, transparent 0%, #000 22%, #000 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 22%, #000 100%)"
        }}
      />
    </div>
  );
}