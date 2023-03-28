import styled from "@emotion/styled";

const SubTitle = styled.p`
  color: black;
`;
//   color: ${(props) => props.theme.titleColor};  -> error: property titleColor doesnt exist on theme

export const SectionSubtitle = ({ label }: { label: string }) => {
  return <SubTitle className="text-base font-normal">{label}</SubTitle>;
};
