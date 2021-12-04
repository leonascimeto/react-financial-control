import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;

  background-color: ${props => props.theme.colors.terciary};
  color: ${props => props.theme.colors.white};

  border-radius: 8px;

  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img{
    width: 36px;
    margin-left: 8px;
  }

  > header p{
    font-size: 18px;
  }

  @media(max-width: 770px){
    width: 100%;
    > header h1{
      font-size: 24px;
      
      img{
        height: 20px;
        width: 20px;
      }
    }

    > header position, > footer span{
      font-size: 14px;
    }
  }

  @media(max-width: 420px){
    height: auto;

    > header{
      margin-bottom: 16px;
    }
  }

`;