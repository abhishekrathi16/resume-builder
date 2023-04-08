export const ProfileContact = ({ text }: { text: string }) => {
  return (
    <div>
      <p
        className="text-sm font-normal"
        style={{ fontStyle: "italic", fontFamily: "Space Mono, monospace" }}
      >
        {text}
      </p>
    </div>
  );
};
