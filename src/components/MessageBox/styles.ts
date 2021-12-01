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


`;