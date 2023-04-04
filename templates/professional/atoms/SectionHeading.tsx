export const SectionHeading = ({ title }: { title: string }) => {
  return (
    <>
      <div
        className=""
        style={{ width: "100%", height: "2px", backgroundColor: "#0062b4" }}
      ></div>
      <div
        className="relative mb-2 font-bold text-center text-[#0062b4]"
        style={{
          color: "white",
          backgroundColor: "#0062b4",
          fontSize: "1.3rem",
          fontFamily: "Alegreya",
        }}
      >
        {title}
      </div>
      <div
        className=""
        style={{ width: "100%", height: "2px", backgroundColor: "#0062b4" }}
      ></div>
    </>
  );
};
