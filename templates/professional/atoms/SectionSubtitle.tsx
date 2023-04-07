import styled from "@emotion/styled";

const SubTitle = styled.p`
  color: black;
`;
//   color: ${(props) => props.theme.titleColor};  -> error: property titleColor doesnt exist on theme

export const SectionSubtitle = ({ label }: { label: string }) => {
  return (
    <SubTitle
      className="text-sm font-normal"
      style={{ fontStyle: "italic", fontFamily: "Alegreya" }}
    >
      {label}
    </SubTitle>
  );
};
