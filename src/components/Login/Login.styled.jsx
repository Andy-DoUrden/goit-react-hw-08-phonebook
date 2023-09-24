import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  padding: 20px;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 400px;
  margin-top: 20px;
`;

const LoginBlock = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LoginName = styled.span`
  font-size: 20px;
  color: #f2ab26;
`;

const LoginValue = styled.input`
  width: 260px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  transition: 300ms;

  :hover,
  :focus {
    border: 2px solid #00f90f;
  }
`;

const LoginBtn = styled.button`
  width: 180px;
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
    background-color: #003300;
    border: 2px solid #00f90f;
    color: #00f90f;
  }
`;

export { Container, Form, LoginBlock, LoginName, LoginValue, LoginBtn };
