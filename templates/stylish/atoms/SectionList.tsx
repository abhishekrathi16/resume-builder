export const SectionList = ({
  children,
}: {
  children: JSX.Element | string;
}) => {
  return (
    <div
      className=""
      style={{
        fontSize: "1.8rem",
        fontFamily: "Space Mono, monospace",
        textAlign: "left",
        marginTop: "10px",
      }}
    >
      {children}
    </div>
  );
};
