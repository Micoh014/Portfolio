// Thin wrapper around a simple-icons icon object ({ title, path, hex }).
// Renders the real brand mark in its official color.
export default function SimpleIcon({ icon, className }) {
  if (!icon) return null;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill={`#${icon.hex}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
