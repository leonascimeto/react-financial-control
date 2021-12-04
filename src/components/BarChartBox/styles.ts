import styled, { keyframes } from "styled-components";

interface ILegendProps {
  color: string;
}

const showByRight = keyframes`
  0%{
    transform: translateX(100px);
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

export const Container = styled.div`
  width: 48%;
  height: 260px;

  display: flex;

  
  margin: 10px 0;

  background-color: ${props => props.theme.colors.terciary};

  border-radius: 8px;

  animation: ${showByRight} .5s;

  @media(max-width: 1200px){
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
  }
`;

export const SideLeft = styled.aside`
  flex: 1;
  padding: 30px 20px;

  > h2{
    margin-bottom: 8px;
    padding-left: 16px;
  }
`;

export const SideRigth = styled.main`
  flex: 1;
  min-height: 150px;

  display: flex;
  justify-content: center;

  padding-top: 36px;
`;

export const LegendContainer = styled.ul`
  list-style: none;

  height: 175px;
  padding-right: 16px;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 10px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 16px;
  }

  ::-webkit-scrollbar-track{
    background-color: ${props => props.theme.colors.terciary};
  }
  @media(max-width: 1200px){
    display: flex;

  }

`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  padding-left: 16px;

  > div{
    background-color: ${props => props.color};

    width: 40px;
    height: 40px;
    border-radius: 4px;

    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }

  > span{
    margin-left: 4px;
  }

  @media(max-width: 1200px){
    > div{
      width: 30px;
      height: 30px;

      font-size: 10px;
      line-height: 30px;
    }
  }

`;
