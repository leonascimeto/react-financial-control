import styled from "styled-components";

interface ITitle {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  @media(max-width: 420px){
    flex-direction: column;
  }
`;

export const Title = styled.div<ITitle>`
  > h1{
      color: ${props => props.theme.colors.white};

      &::after{
        content: '';
        display: block;
        width: 56px;
        border-bottom: 10px solid ${props => props.lineColor};
      }

      @media(max-width: 420px){
          font-size: 20px;

          &::after{
            content: '';
            display: block;
            width: 56px;
            border-bottom: 5px solid ${props => props.lineColor};
          }
      } 
    }
`;

export const Controllers = styled.div`
  display: flex;
  
  @media(max-width: 420px){
    width: 100%;

    justify-content: space-around;
    margin-top: 16px;
  }
`;
