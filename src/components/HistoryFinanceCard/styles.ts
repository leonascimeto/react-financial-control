import styled, { keyframes } from "styled-components";

interface ITagProps {
  color: string;
}

const showByLeft = keyframes`
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  50%{
    opacity: .3;
  }
  100%{
    transform: translateX(initial);
    opacity: 1;
  }
`

export const Container = styled.li`
  background-color: ${props => props.theme.colors.terciary};
  list-style: none;
  border-radius: 8px;
  margin: 8px 0;
  padding: 16px 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all .3s;

  position: relative;

  animation: ${showByLeft} .5 ease;

  &:hover{
    opacity: .7;
    transform: translateX(8px);
  }

  > div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 16px;
  }

  > div span{
    font-weight: 500;
    font-size: 20px;
  }

`;

export const Tag = styled.div<ITagProps>`
  background-color: ${props => props.color};
  width: 16px;
  height: 60%;
  position: absolute;
  left: 0;
`;
