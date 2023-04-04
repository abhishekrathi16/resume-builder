export const ProfileName = ({ name }: { name: string }) => {
  return (
    <h1
      className="font-extrabold max-w-[100%] text-center"
      style={{
        fontSize: "2.5rem",
        color: "#373737",
        paddingBottom: "0px",
        fontFamily: "Space Mono, monospace",
      }}
      title={name}
    >
      {name}
    </h1>
  );
};
