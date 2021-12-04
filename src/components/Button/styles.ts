import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  margin: 8px 0;
  padding: 8px;

  border-radius: 4px;

  font-weight: bold;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.warning};

  transition: opacity .3s;

  &:hover{
    opacity: .7;
  }
`;