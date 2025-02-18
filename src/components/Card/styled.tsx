import styled from "styled-components";
import { mediaQueries, spaceUnit } from "../../styles";

interface StyledCardProps {
  height?: string;
  margin?: string;
  backgroundColor?: string;
}

interface StyledCardContentProps {
  size?: "small" | "regular";
  inline?: boolean;
}
const displayInlineProperties = `
  display: flex;
justify-content: space-between;
align-items: center;`;

export const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.componentBackground};
  box-shadow: ${(props) => props.theme.shadows.default};
  border-radius: ${(props) => props.theme.borderRadius.base};
  width: 100%;
  color: ${(props) => props.theme.colors.lightText};
  @media ${mediaQueries.tablet} {
    min-width: 512px;
    max-width: 900px;
  }
`;

const smallCardContentSize = `${(spaceUnit / 4) * 1}px ${
  (spaceUnit / 4) * 2
}px;`;
const regularCardContentSize = `${spaceUnit * 1}px ${spaceUnit * 2}px;`;

export const StyledCardContent = styled.div<StyledCardContentProps>`
  width: 100%;
  padding: ${(props) =>
    props.size === "small" ? smallCardContentSize : regularCardContentSize};
  ${(props) => (props.inline ? displayInlineProperties : null)}
`;
