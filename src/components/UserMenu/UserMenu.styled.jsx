import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 20px;
`;

const Nickname = styled.h1`
  font-size: 50px;
  color: #f2ab26;
`;

const LogOutBtn = styled.button`
  width: 120px;
  height: 40px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  font-size: 20px;

  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: #002b00;
    border: 2px solid #00f90f;
    color: #00f90f;
  }
`;

export { Container, Nickname, LogOutBtn };
