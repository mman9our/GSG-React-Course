import "./TagButtonStyle.css";
export default function TagButton({ title, children }) {
  return (
    <button className="tagButton">
      <span style={{ fontSize: "20px" }}>{title}</span>
      {children}
    </button>
  );
}
