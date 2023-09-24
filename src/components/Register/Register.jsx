import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import { toast } from 'react-toastify';

import {
  Container,
  Form,
  RegisterBlock,
  RegisterName,
  RegisterValue,
  RegisterBtn,
} from './Register.styled';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'confirmPassword':
        setConfirmPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.warning('Passwords are not the same');
      return;
    }

    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <RegisterBlock>
          <RegisterName>Name</RegisterName>
          <RegisterValue
            type="text"
            name="name"
            value={name}
            title="This is name"
            required
            onChange={handleInputChange}
            autoComplete="off"
          />
        </RegisterBlock>

        <RegisterBlock>
          <RegisterName>Mail</RegisterName>
          <RegisterValue
            type="email"
            name="email"
            value={email}
            title="This is mail"
            required
            onChange={handleInputChange}
            autoComplete="off"
          />
        </RegisterBlock>

        <RegisterBlock>
          <RegisterName>Password</RegisterName>
          <RegisterValue
            type="password"
            name="password"
            value={password}
            title="This is password"
            required
            onChange={handleInputChange}
            autoComplete="off"
          />
        </RegisterBlock>

        <RegisterBlock>
          <RegisterName>Confirm password</RegisterName>
          <RegisterValue
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            title="This is password confirm"
            required
            onChange={handleInputChange}
            autoComplete="off"
          />
        </RegisterBlock>

        <RegisterBtn>Register</RegisterBtn>
      </Form>
    </Container>
  );
};

export default Register;
