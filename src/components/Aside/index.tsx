import React from 'react';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';
import { Container, Header, LogoImg, Title, MenuContent, MenuItemLink } from './styles';

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContent>

        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
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

        <Link to="/exit" style={{ textDecoration: 'none' }}>
          <MenuItemLink>
            <MdExitToApp />
            Sair
          </MenuItemLink>
        </Link>
      </MenuContent>
    </Container>
  )
}

export default Aside;
