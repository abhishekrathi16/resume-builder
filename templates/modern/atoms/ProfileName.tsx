export const ProfileName = ({ name }: { name: string }) => {
  return (
    <h1
      className="font-extrabold max-w-[100%] text-center"
      style={{
        fontSize: "2.5rem",
        color: "#0062b4",
        paddingBottom: "0px",
        fontFamily: "Alegreya",
      }}
      title={name}
    >
      {name}
    </h1>
  );
};
