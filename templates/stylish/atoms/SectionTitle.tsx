export const SectionTitle = ({ label }: { label: string }) => {
  return (
    <p
      className="text-lg font-bold text-left"
      style={{ fontFamily: "monospace" }}
    >
      {label}
    </p>
  );
};
