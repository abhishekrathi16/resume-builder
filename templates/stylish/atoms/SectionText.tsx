export const SectionText = ({
  children,
}: {
  children: JSX.Element | string;
}) => {
  return (
    <div className="text-sm py-1.5" style={{ fontFamily: "Alegreya" }}>
      {children}
    </div>
  );
};
