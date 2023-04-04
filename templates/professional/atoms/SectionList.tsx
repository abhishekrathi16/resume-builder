export const SectionList = ({
  children,
}: {
  children: JSX.Element | string;
}) => {
  return (
    <div
      className="mt-0.5"
      style={{ fontSize: "1.4rem", fontFamily: "Alegreya" }}
    >
      {children}
    </div>
  );
};
