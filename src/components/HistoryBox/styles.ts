import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.colors.terciary};
  color: ${props => props.theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px;

  border-radius: 8px;

  
`;

export const ChartContainer = styled.div`
    height: 360px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2{
      margin-bottom: 16px;
      padding-left: 16px;
    }

    @media(max-width: 1200px){
      flex-direction: column;
    }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 0 8px;
  padding-right: 16px;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-left: 16px;

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
  @media(max-width: 1280px){
    > div{
      width: 32px;
      height: 32px;
    }
  }
`;