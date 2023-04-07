export const SectionHeading = ({
  title,
  color,
}: {
  title: string;
  color: string;
}) => {
  return (
    <>
      <div
        className="relative mb-2 font-bold text-left text-[#0062b4]"
        style={{
          color: "inherit",
          fontSize: "1.6rem",
          fontFamily: "Space Mono, monospace",
        }}
      >
        {title}
      </div>
      <div
        className=""
        style={{ width: "100%", height: "2px", backgroundColor: color }}
      ></div>
    </>
  );
};
