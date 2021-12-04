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

  @media(max-width: 770px){
    display: flex;
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2{
    margin-bottom: 20px;
  }

  @media(max-width: 1345px){
    padding: 0 16px 4px;
    margin-bottom: 8px;

    > h2{
      margin-top: 16px;
      margin-bottom: 8px;
    }
  }

  @media(max-width: 420px){
    padding: 16px;
    margin-bottom: 8px;
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

  @media(max-width: 1345px){
    display: flex;
    flex-direction: column;
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

  @media(max-width: 1345px){
    font-size: 14px;
    margin: 4px 0;

    > div{
      width: 35px;
      height: 35px;
      line-height: 35px;
    }

    > spna{
      margin-left: 8px;
    }
  }
`;


export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media(max-width: 1345px){
    height: 100% ;
  }
`;
