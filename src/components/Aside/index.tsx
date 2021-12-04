import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';
import { Container, Header, LogoImg, Title, MenuContent, MenuItemLink, MenuItemButton } from './styles';

import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContent>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <MenuItemLink>
            <MdDashboard />
            Dashboard
          </MenuItemLink>
        </Link>

        <Link to="/list/entry-balance" style={{ textDecoration: 'none' }}>
          <MenuItemLink>
            <MdArrowUpward />
            Entradas
          </MenuItemLink>
        </Link>

        <Link to="/list/exit-balance" style={{ textDecoration: 'none' }}>
          <MenuItemLink>
            <MdArrowDownward />
            Saídas
          </MenuItemLink>
        </Link>

        <MenuItemButton onClick={signOut} >
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContent>
    </Container>
  )
}

export default Aside;
