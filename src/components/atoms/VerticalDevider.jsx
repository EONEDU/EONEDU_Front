import styled from "styled-components";

const StyledDevider = styled.div`
  display: flex;
  width: 1px;
  background-color: ${({ color }) => color};
  height: ${props => props.height};
`;

function VerticalDevider({ color, height }) {
  return <StyledDevider color={color} height={height} />;
}

export default VerticalDevider;