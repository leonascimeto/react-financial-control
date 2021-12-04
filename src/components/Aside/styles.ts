import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};

  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 8px;
`;

export const MenuContent = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 7px 0;
`;

export const MenuItemLink = styled.span`
  color: ${props => props.theme.colors.info};

  display: flex;
  align-items: center;


  transition: opacity .2s;

  &:hover{
    opacity: .7;
  }

  > svg{
    font-size: 18px;
    margin-right: 8px;
  }
`;

export const MenuItemButton = styled.button`
  font-size: 16px;
  color: ${props => props.theme.colors.info};
  
  background: none;
  border: none;

  display: flex;
  align-items: center;


  transition: opacity .2s;

  &:hover{
    opacity: .7;
  }

  > svg{
    font-size: 18px;
    margin-right: 8px;
  }
`;
