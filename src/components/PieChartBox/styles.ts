import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin: 10px 0;

  background-color: ${props => props.theme.colors.terciary};
  color: ${props => props.theme.colors.white};

  border-radius: 8px;

  display: flex;
`;


export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2{
    margin-bottom: 20px;
  }
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
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

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
`;


export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;
