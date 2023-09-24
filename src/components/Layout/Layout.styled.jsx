import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 800px;
  padding: 20px;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 160px;
  padding: 20px;
  padding-bottom: 23px;

  background-color: #332b00;
  border-radius: 16px;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  font-size: 20px;
  text-decoration: none;

  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: #003300;
    border: 2px solid #00f90f;
    color: #00f90f;
  }
`;

export { Container, Navigation, LinkContainer, StyledNavLink };
