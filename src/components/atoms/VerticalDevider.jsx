import styled from "styled-components";

const StyledDevider = styled.div`
  display: flex;
  width: 1px;
  background-color: ${({ color }) => color};
`;

function VerticalDevider({ color }) {
  return <StyledDevider color={color} />;
}

export default VerticalDevider;