export default function ButtonToggle({ onSetIsOpen, onIsOpen }) {
  return (
    <button className="btn-toggle" onClick={() => onSetIsOpen((open) => !open)}>
      {onIsOpen ? "–" : "+"}
    </button>
  );
}
