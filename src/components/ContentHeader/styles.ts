import styled from "styled-components";

interface ITitle {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;
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
    }
`;

export const Controllers = styled.div`
  display: flex;    
`;
