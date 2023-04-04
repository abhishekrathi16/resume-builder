export const SectionSubtitle = ({
  label,
  color,
}: {
  label: string;
  color: string;
}) => {
  return (
    <p
      className="text-md font-normal"
      style={{
        fontStyle: "italic",
        fontFamily: "Space Mono, monospace",
        color: color,
      }}
    >
      {label}
    </p>
  );
};
